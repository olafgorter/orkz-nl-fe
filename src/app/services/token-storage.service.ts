
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../model/user';

const TOKEN_KEY = 'accessToken';
const REFRESH_KEY = 'refreshToken';
const USER_KEY = 'auth-user';

@Injectable({ providedIn: 'root' })
export class TokenStorageService {

  public user: any;

  constructor(private http: HttpClient) {}

  /**
   * Get access token
   * @returns {Observable<string>}
   */
  public getAccessToken(): Observable<string> {
    const token: string = <string>sessionStorage.getItem(TOKEN_KEY);
    return of(token);
  }

  /**
   * Get refresh token
   * @returns {Observable<string>}
   */
  public getRefreshToken(): Observable<string> {
    const token: string = <string>sessionStorage.getItem(REFRESH_KEY);
    return of(token);
  }

  /**
   * Set access token
   * @returns {TokenStorageService}
   */
  public setAccessToken(token: string): TokenStorageService {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);  
    this.saveUserKey(token);
    return this;
  }

   /**
   * Set refresh token
   * @returns {TokenStorageService}
   */
  public setRefreshToken(token: string): TokenStorageService {
    sessionStorage.removeItem(REFRESH_KEY);
    sessionStorage.setItem(REFRESH_KEY, token);    
    return this;
  }

   /**
   * Remove tokens
   */
  public clear() {
    sessionStorage.clear();
  }

  /* User */
  public saveUserKey(token) {    
    let payload = JSON.parse(window.atob(token.split('.')[1]));
    this.http.post(environment.apiUrl + '/user/getUser', { id: payload.userId })
    .subscribe((user: User) => {
      sessionStorage.removeItem(USER_KEY);
      sessionStorage.setItem(USER_KEY, JSON.stringify(user));
      this.user = user;
    });

  }

  public getUser() {

    let userkey = JSON.parse(sessionStorage.getItem(USER_KEY));
    return userkey;
  }

}
