interface UserProps {
  name: string;
  age: number;
}
export class User {
  constructor(private data: UserProps) {}
  get(propsName: string): string | number {
    return this.data[propsName];
  }
}
