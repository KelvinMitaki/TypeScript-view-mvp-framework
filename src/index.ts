import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";

// const user = User.buildUser({ name: "Last User", age: 30 });
// user.on("save", () => console.log(user));

// user.save();
const collection = new Collection<User, UserProps>(
  "http://localhost:3000/users",
  (json: UserProps) => User.buildUser(json)
);
collection.on("change", () => console.log(collection));
collection.fetch();
