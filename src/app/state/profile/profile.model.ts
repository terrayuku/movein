export interface IProfile {
  displayName: string;
  photoURL: string;
  phoneNumber: string;
}

export class Profile {
  constructor(public displayName?: string, public photoURL?: string, public phoneNumber?: number) { }
}
