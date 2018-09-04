export interface IUser {
  uid: string;
  displayName: string;
  loading: string;
  error?: string;
}

export class User {
  constructor(public uid: string, public displayName: string) {}
}
