import { Resident } from './resident';

export class User {
    id?: number;
    username: String;
    password: String;
    email: String;
    version?: number;

    resident: Resident;
  }