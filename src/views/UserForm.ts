import { View } from "./View";
export class UserForm extends View {
  public eventsMap(): { [key: string]: () => void } {
    return {
      "click:.setAge": this.setAgeClick,
      "click:.setName": this.setNameClick
    };
  }

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
            <h1>User Form</h1>
            <p>User Name: ${this.model.get("name")}</p>
            <p>Age: ${this.model.get("age")}</p>
            <input/>
            <button class="setName">Change Name</button>
            <button class="setAge">Set Random Age</button>
        </div>
        `;
  }
}
