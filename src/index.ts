import { User } from "./models/User";
import { Collection } from "./models/Collection";

// const user = User.buildUser({ name: "Last User", age: 30 });
// user.on("save", () => console.log(user));

// user.save();
const collection = new Collection("http://localhost:3000/users");
collection.on("change", () => console.log(collection));
collection.fetch();
