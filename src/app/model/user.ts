import { Resident } from './resident';

export interface User {
    id?: number;
    username: String;
    password: String;
    email: String;
    version?: number;

    resident: Resident;
  }