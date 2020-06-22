import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import { AuthenticationService } from './services/authentication.service';
import { User } from './model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Orkz NL';
  isAdmin = false;

  usr: User;

  constructor(private router: Router, private tokenStorageService: TokenStorageService, private authenticationService: AuthenticationService){ }

  ngOnInit(){
    this.usr = this.tokenStorageService.getUser();
    this.isAdmin = this.authenticationService.hasRole(this.usr, "ROLE_ADMIN");
  }

  logout(){
    this.authenticationService.logout();
    this.delay(1000);
    window.location.reload();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
