import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export type Callback = () => void;
const rootUrl = "http://localhost:3000/users";
export class User {
  public event: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
}
