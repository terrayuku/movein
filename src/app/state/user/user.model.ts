export interface IUser {
  uid: string;
  displayName: string;
  loading: string;
  error?: string;
}

export class User {
  constructor(public uid: string, public displayName: string) {}
}

export class NewUser {
  constructor(public  email: string, public password: string) {}
}
