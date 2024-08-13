import { Injectable } from '@angular/core';
import { RequestLogin } from '../Request.login';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../ResponseLogin';
import { RequestSignup } from './request.signup';
import { ResponseSignup } from './response.signup';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private readonly LOGIN_API = 'http://localhost:3000/login'
  private readonly SIGNUP_API = 'http://localhost:3000/signup';


  constructor(private httpClient: HttpClient) { }

  public Onlogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin> ( 
      'http://localhost:3000/login',
       requestLogin
      );
  }
  public OnSignUp (requestSignup: RequestSignup): Observable<ResponseSignup>{
    return this.httpClient.post<ResponseSignup>(
      'http://localhost:3000/signup',
      requestSignup
    )
  }
}
