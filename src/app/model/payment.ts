import { Resident } from './resident';

export class Payment{
    id?: number;
    amount: number;
    payment_date: Date;
    description: string;
    change_name: string;
    change_date: Date;
    version?: number;

    resident: Resident;

}