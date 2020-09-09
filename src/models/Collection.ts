import { Eventing } from "./Eventing";
import Axios, { AxiosResponse } from "axios";

export class Collection<T, K> {
  models: T[] = [];
  event: Eventing = new Eventing();
  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}
  get on() {
    return this.event.on;
  }
  get trigger() {
    return this.event.trigger;
  }
  fetch(): void {
    Axios.get(this.rootUrl).then((res: AxiosResponse) => {
      const { data }: { data: [] } = res;
      data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      });
      this.trigger("change");
    });
  }
}
