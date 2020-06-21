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
    this.isAdmin = this.authenticationService.isAdmin();
  }

  logout(){
    this.authenticationService.logout();
    window.location.reload();
    this.router.navigate(['login']);
  }
}
