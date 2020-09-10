import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

const user = User.buildUser({ name: "New User", age: 30 });

const userEdit = new UserEdit(document.getElementById("root"), user);
userEdit.render();
