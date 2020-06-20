import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './authentication/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AdministratorModule } from './administrator/administrator.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    AdministratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
