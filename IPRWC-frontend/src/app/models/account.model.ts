

export class Account {

  id: string | undefined;
  email: string | undefined;
  password: string | undefined;
  type: string | undefined;

  constructor(id? : string | undefined, email?: string, password?: string, type?: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.type = type;
  }
}
