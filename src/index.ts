import { User } from "./models/User";

const user = new User({ age: 20, name: "User 2" });
user.on("save", () => console.log(user));
user.save();
