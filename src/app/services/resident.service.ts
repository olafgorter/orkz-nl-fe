import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Resident } from '../model/resident';



@Injectable({
  providedIn: 'root'
})


export class ResidentService {

  resident: Resident;

  constructor(
    private http: HttpClient,
  ) { }

  getAllResidents(){
    return this.http.post(environment.apiUrl + '/resident/getallresidents', { });

  }
}