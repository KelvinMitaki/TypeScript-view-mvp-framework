import { View } from "./View";
import { User, UserProps } from "../models/User";
export class UserForm extends View<User, UserProps> {
  public eventsMap(): { [key: string]: () => void } {
    return {
      "click:.setAge": this.setAgeClick,
      "click:.setName": this.setNameClick,
      "click:.saveModel": this.onSaveClick
    };
  }
  private onSaveClick = (): void => {
    this.model.save();
  };
  private setAgeClick = (): void => {
    this.model.setRandomAge();
  };
  private setNameClick = (): void => {
    const input = this.parent.querySelector("input");
    this.model.set({ name: input.value });
  };
  public template(): string {
    return `
        <div>
            <input placeholder="${this.model.get("name")}" />
            <button class="setName">Change Name</button>
            <button class="setAge">Set Random Age</button>
            <button class="saveModel">Save</button>
        </div>
        `;
  }
}
