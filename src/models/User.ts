import { Model } from "./Model";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Attributes } from "./Attributes";
import { Collection } from "./Collection";
export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export type Callback = () => void;
const rootUrl = "http://localhost:3000/users";
export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }
  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      "http://localhost:3000/users",
      (json: UserProps) => User.buildUser(json)
    );
  }
  setRandomAge(): void {
    this.set({ age: Math.round(Math.random() * 100) });
  }
}
