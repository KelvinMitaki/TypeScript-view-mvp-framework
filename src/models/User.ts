import { Eventing } from "./Eventing";
export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export type Callback = () => void;

export class User {
  constructor(private data: UserProps) {}
  public event: Eventing = new Eventing();

  get(propsName: string): string | number {
    return this.data[propsName];
  }
  set(update: UserProps): void {
    this.data = { ...this.data, ...update };
  }
}
