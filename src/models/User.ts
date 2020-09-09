import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";
export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export type Callback = () => void;
const rootUrl = "http://localhost:3000/users";
export class User {
  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
  private event: Eventing = new Eventing();
  private sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  private attributes: Attributes<UserProps>;

  get get() {
    return this.attributes.get;
  }
  get on() {
    return this.event.on;
  }

  get trigger() {
    return this.event.trigger;
  }
  set(userProps: UserProps) {
    this.attributes.set(userProps);
    this.event.trigger("change");
  }
}
