import { User, UserProps } from "./User";
import { Eventing } from "./Eventing";
import Axios, { AxiosResponse } from "axios";

export class Collection {
  models: User[] = [];
  event: Eventing = new Eventing();
  constructor(public rootUrl: string) {}
  get on() {
    return this.event.on;
  }
  get trigger() {
    return this.event.trigger;
  }
  fetch(): void {
    Axios.get(this.rootUrl).then((res: AxiosResponse) => {
      const { data }: { data: [] } = res;
      data.forEach((value: UserProps) => {
        const user = User.buildUser(value);
        this.models.push(user);
      });
      this.trigger("change");
    });
  }
}
