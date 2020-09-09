// import { User } from "./models/User";

import { UserForm } from "./views/UserForm";

// // const user = User.buildUser({ name: "Last User", age: 30 });
// // user.on("save", () => console.log(user));

// // user.save();
// const collection = User.buildUserCollection();
// collection.on("change", () => console.log(collection));
// collection.fetch();

const userForm = new UserForm(document.getElementById("root"));
userForm.render();
