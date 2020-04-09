import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, switchMap, map } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
import { Observable, BehaviorSubject } from 'rxjs';
//import { Router } from '@angular/router';

import { User } from './model/user';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  user: User;

  constructor(
    private http: HttpClient,
  ) { }

  login(username: String, password: String): Observable<any> {
    return this.http.post(environment.apiUrl + '/user/login', { username: username, password: password });
  }
}
