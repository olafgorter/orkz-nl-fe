import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../model/user';



@Injectable({
  providedIn: 'root'
})


export class UserService {

  user: User;

  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers(){
    return this.http.post(environment.apiUrl + '/user/getallusers', { });

  }
}
