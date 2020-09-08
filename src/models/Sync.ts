import Axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";
export class Sync {
  constructor(public rootUrl: string) {}
  fetch(id: number): AxiosPromise {
    return Axios.get(`${this.rootUrl}/${id}`);
  }
  save(data: UserProps): AxiosPromise {
    const id = data.id;
    if (id) {
      return Axios.put(`${this.rootUrl}/${id}`, data);
    }
    return Axios.post(this.rootUrl, data);
  }
}
