import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { MessageService } from '../message.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private messageService: MessageService, public userService: UserService, 
              private router:Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  login(): void {
    console.log("login start");
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    let loginObservable = this.userService.login(username, password);
    loginObservable.subscribe((res) => {
      // this.message = res;
      // this.messageService.add(this.message.result);
      this.router.navigateByUrl('/dashboard');
    }, (err) => {
      console.log("error:", err);
    });
    console.log("login end");
  }
}
