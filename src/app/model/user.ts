import { Resident } from './resident';
import { UserRole } from './userrole';

export class User {
    id?: number;
    username: string;
    password: string;
    email: string;
    version?: number;

    resident: Resident;

    userRoles: Array<UserRole>;
  }