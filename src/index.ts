import { User } from "./models/User";

const user = new User({ age: 20, name: "Kevin" });
user.set({ age: 21 });
user.on("change", () => {
  console.log("change #1");
});
user.on("change", () => {
  console.log("change #2");
});
user.on("click", () => {});
user.trigger("change");
