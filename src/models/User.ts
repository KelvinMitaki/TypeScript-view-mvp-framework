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
  constructor(private data: UserProps) {}
  public event: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  get(propsName: string): string | number {
    return this.data[propsName];
  }
  set(update: UserProps): void {
    this.data = { ...this.data, ...update };
  }
}
