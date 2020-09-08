import { User } from "./models/User";

const user = new User({ age: 20, name: "Kevin" });
user.set({ age: 21 });
console.log(user.get("name"));
console.log(user.get("age"));
