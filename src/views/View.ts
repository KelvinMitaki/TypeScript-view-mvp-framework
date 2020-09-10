import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }
  eventsMap(): { [key: string]: () => void } {
    return {};
  }
  abstract template(): string;
  private bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
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
}
