import { User } from "./models/User";

const user = new User({ age: 20, name: "User 1", id: 1 });
user.on("change", () => console.log(user));
user.set({ name: "User" });
