import { User } from "./models/User";

const user = new User({ age: 20, name: "Kevin" });
user.set({ age: 21 });
user.on("change", () => {});
user.on("change", () => {});
user.on("click", () => {});
console.log(user.events);
