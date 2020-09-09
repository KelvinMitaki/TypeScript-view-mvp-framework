import { User } from "./models/User";

const user = User.buildUser({ name: "Last User", age: 30 });
user.on("save", () => console.log(user));

user.save();
