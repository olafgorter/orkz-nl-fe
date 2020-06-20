import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AdministratorService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.post(environment.apiUrl + '/administrator/getUsers', { });
  }
}
