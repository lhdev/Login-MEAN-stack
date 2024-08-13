import { Injectable } from '@angular/core';
import { RequestSignup } from './request.signup';
import { ResponseSignup } from './response.signup';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  onSignUp(RequestSignup: RequestSignup) {
    throw new Error('Method not implemented.');
  }

  private readonly API = 'http://localhost:3000/signup'

  constructor(private httpClient: HttpClient) { }

  public OnSignUp(requestSignup: RequestSignup):Observable<ResponseSignup> {
    return this.httpClient.post<ResponseSignup> ( 
      'http://localhost:3000/signup',
       requestSignup
      );
  }
}
