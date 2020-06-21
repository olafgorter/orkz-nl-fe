import { User } from './user';
import { Role } from './role';

export class UserRole {
    id?: number;
    version?: number;

    role: Role;
    user: User;

  }