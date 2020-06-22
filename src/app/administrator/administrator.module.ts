import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserModalComponent } from './modal/usermodal.component';
import { ChargeModalComponent } from './modal/chargemodal.component';
import { AdministratorComponent } from './administrator.component';
import { ResidentDetailComponent } from './details/residentdetail.component';

@NgModule({
  declarations: [
    UserModalComponent,
    AdministratorComponent,
    ChargeModalComponent,
    ResidentDetailComponent,

  ],
  imports: [
    SharedModule,
  ],
  providers: [],
  bootstrap: [UserModalComponent, ChargeModalComponent ]

})

export class AdministratorModule { }
