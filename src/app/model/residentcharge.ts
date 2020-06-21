import { Charge } from './charge';
import { Resident } from './resident';

export class ResidentCharge{
    id?: number;
    version?: number;

    charge: Charge;
    resident: Resident;
}