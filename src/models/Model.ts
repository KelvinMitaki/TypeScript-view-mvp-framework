import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  getAll(): T;
}
interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}
interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}
interface HasId {
  id?: number;
}
export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private event: Events,
    private sync: Sync<T>
  ) {}
  get get() {
    return this.attributes.get;
  }
  get on() {
    return this.event.on;
  }

  get trigger() {
    return this.event.trigger;
  }
  set(userProps: T): void {
    this.attributes.set(userProps);
    this.event.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");
    if (typeof id !== "number") {
      throw new Error("Id must be provided");
    }
    this.sync.fetch(id).then((res: AxiosResponse) => {
      this.set(res.data);
    });
  }

  save(): void {
    const attr = this.attributes.getAll();
    this.sync
      .save(attr)
      .then((res: AxiosResponse): void => this.trigger("save"))
      .catch((): void => this.trigger("error"));
  }
}
