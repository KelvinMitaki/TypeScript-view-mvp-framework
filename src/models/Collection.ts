import { User } from "./User";
import { Eventing } from "./Eventing";

export class Collection {
  models: User[] = [];
  event: Eventing = new Eventing();
  get on() {
    return this.event.on;
  }
  get trigger() {
    return this.event.trigger;
  }
}
