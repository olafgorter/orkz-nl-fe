import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserModalComponent } from './modal/usermodal.component';
import { AdministratorComponent } from './administrator.component';

@NgModule({
  declarations: [
    UserModalComponent,
    AdministratorComponent,
  ],
  imports: [
    SharedModule,
  ],
  providers: [],
  bootstrap: [UserModalComponent]

})

export class AdministratorModule { }
