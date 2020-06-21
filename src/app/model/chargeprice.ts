import { Charge } from './charge';

export class ChargePrice{
    id?: number;
    price: number;
    start_date: Date;
    end_date: Date;
    version?: number;

    charge: Charge;
}