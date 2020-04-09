import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';
import { UserService } from '../user.service';
import { MessageService } from '../message.service';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import * as _ from 'lodash';

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

  constructor(private messageService: MessageService, public userService: UserService, private formBuilder: FormBuilder) { }

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
    console.log(username);
    console.log(password);
    let loginObservable = this.userService.login(username, password);
    loginObservable.subscribe((res) => {
      this.message = res;
      this.messageService.add(this.message.result);
    }, (err) => {
      console.log("error:", err);
    });
    console.log("login end");
  }
}
