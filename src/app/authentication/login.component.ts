import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { MessageService } from '../services/message.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { TokenStorageService } from '../services/token-storage.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message : {
    result: string
  }

  loginForm: FormGroup;
  title = "ORKZ NL";

  user: User;
  isAdmin: boolean = false;
  isMember: boolean = false;

  constructor(private messageService: MessageService, public userService: UserService, private router:Router,
              private route: ActivatedRoute, private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {

    if(this.tokenStorageService.getUser()){
      this.router.navigate(['dashboard']);
    }

    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  login(){
    let lf = this.loginForm.value;

    this.authenticationService.login(lf.username, lf.password).subscribe(async (response) =>{

      let auth = response.headers.get('authorization');
      let tokens = JSON.parse(auth);

      this.authenticationService.saveAccessData(tokens);
      await this.delay(1000); // it takes a sec to get the data saved to local and session storage

      this.user = this.tokenStorageService.getUser(); 
      this.authenticationService.setUser();

      // console.log("getUser start");
      // console.log(sessionStorage.getItem("auth-user"));
      // console.log(this.user);
      // console.log("getUser end");

      window.location.reload();
    }, (err) => {
      console.log(err);
    });  
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
