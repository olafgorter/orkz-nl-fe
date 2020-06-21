import { Room } from './room';

export class Resident {
    id?: number;
    fullName: string;
    bankAccount: string;
    version?: number;

    room: Room;
    
  }