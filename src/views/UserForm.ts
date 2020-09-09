export class UserForm {
  constructor(public parent: Element) {}

  eventsMap = (): { [key: string]: () => void } => {
    return {
      "click:button": this.onButtonClick
    };
  };

  bindEvents = (fragment: DocumentFragment): void => {
    const events = this.eventsMap;
    Object.keys(events).forEach((key: string): void => {
      const [eventName, selector] = key.split(":");
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, events[key]);
      });
    });
  };
  onButtonClick(): void {
    console.log("Hi There");
  }

  template(): string {
    return `
        <div>
            <h1>User Form</h1>
            <input/>
        </div>
        `;
  }
  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.parent.append(templateElement.content);
  }
}
