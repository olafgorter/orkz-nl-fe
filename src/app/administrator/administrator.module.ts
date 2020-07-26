import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserModalComponent } from './modal/usermodal.component';
import { ChargeModalComponent } from './modal/chargemodal.component';
import { AdministratorComponent } from './administrator.component';
import { ResidentDetailComponent } from './details/residentdetail.component';
import { ResidentModalComponent } from './modal/residentmodal.component';

@NgModule({
  declarations: [
    UserModalComponent,
    AdministratorComponent,
    ChargeModalComponent,
    ResidentDetailComponent,
    ResidentModalComponent,

  ],
  imports: [
    SharedModule,
  ],
  providers: [],
  bootstrap: [UserModalComponent, ChargeModalComponent, ResidentModalComponent ]

})

export class AdministratorModule { }
