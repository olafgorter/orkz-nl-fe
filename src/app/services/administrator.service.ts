import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class AdministratorService {

  constructor(private http: HttpClient) { }

  getResidentList(){
    return this.http.post(environment.apiUrl + '/administrator/getResidents', { });
  }

  saveUser(user:User) {
    return this.http.post(environment.apiUrl + '/administrator/saveUser', user);
  }

  deleteUser(userId: number) {
    return this.http.post(environment.apiUrl + '/administrator/deleteUser', { userId: userId });
  }

}
