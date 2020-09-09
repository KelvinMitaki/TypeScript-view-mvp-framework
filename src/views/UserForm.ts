import { User } from "../models/User";
export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }
  private bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }
  private eventsMap(): { [key: string]: () => void } {
    return {
      "click:.setAge": this.setAgeClick,
      "click:.setName": this.setNameClick
    };
  }
  private bindEvents(fragment: DocumentFragment): void {
    const events = this.eventsMap();
    Object.keys(events).forEach((key: string): void => {
      const [eventName, selector] = key.split(":");
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, events[key]);
      });
    });
  }
  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
  private setAgeClick = (): void => {
    this.model.setRandomAge();
  };
  private setNameClick = (): void => {
    const input = this.parent.querySelector("input");
    this.model.set({ name: input.value });
  };
  private template(): string {
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
