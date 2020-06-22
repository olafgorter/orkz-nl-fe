import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Charge } from '../model/charge';



@Injectable({
  providedIn: 'root'
})


export class ChargeService {

  charge: Charge;

  constructor(
    private http: HttpClient,
  ) { }

  getAllCharges(){
    return this.http.post(environment.apiUrl + '/charge/getAllCharges', { });

  }
}