import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserModalComponent } from './modal/usermodal.component';
import { ChargeModalComponent } from './modal/chargemodal.component';
import { AdministratorComponent } from './administrator.component';

@NgModule({
  declarations: [
    UserModalComponent,
    AdministratorComponent,
    ChargeModalComponent,
  ],
  imports: [
    SharedModule,
  ],
  providers: [],
  bootstrap: [UserModalComponent, ChargeModalComponent ]

})

export class AdministratorModule { }
