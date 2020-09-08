import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
interface UserProps {
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
  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((res: AxiosResponse): void => this.set(res.data));
  }
  save(): void {
    const id = this.get("id");
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
      return;
    }
    axios.post("http://localhost:3000/users", this.data);
  }
}
