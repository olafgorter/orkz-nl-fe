import { Resident } from './resident';
import { UserRole } from './userrole';

export class User {
    id?: number;
    username: String;
    password: String;
    email: String;
    version?: number;

    resident: Resident;

    userRoles: Array<UserRole>;
  }