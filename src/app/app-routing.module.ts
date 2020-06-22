
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './authentication/login.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { ResidentDetailComponent } from './administrator/details/residentdetail.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'administrator', component: AdministratorComponent },
  
  { path: 'resident', redirectTo:'administrator', pathMatch: 'full' },
  { path: 'resident/:residentId', component: ResidentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
