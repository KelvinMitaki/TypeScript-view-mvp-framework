import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick
    };
  }

  bindEvents(fragment: DocumentFragment): void {
    const events = this.eventsMap();
    Object.keys(events).forEach((key: string): void => {
      const [eventName, selector] = key.split(":");
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, events[key]);
      });
    });
  }
  onButtonClick(): void {
    console.log("Hi There");
  }

  template(): string {
    return `
        <div>
            <h1>User Form</h1>
            <p>User Name: ${this.model.get("name")}</p>
            <p>Age: ${this.model.get("age")}</p>
            <input/>
            <button>Hi there</button>
        </div>
        `;
  }
  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
