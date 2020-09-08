import { User } from "./models/User";

const user = new User({ age: 20, name: "User 1", id: 1 });
user.save();
// user.on("change", () => {
//   console.log("change #1");
// });
// user.on("change", () => {
//   console.log("change #2");
// });
// user.on("click", () => {});
// user.trigger("change");
