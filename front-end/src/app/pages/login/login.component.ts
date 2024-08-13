import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RequestLogin } from '../../resources/models/Request.login';
import { LoginService } from '../../resources/models/services/login.service';
import { RequestSignup } from '../../resources/models/services/request.signup';
import { SignupService } from '../../resources/models/services/signup.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
OnLogin() {
throw new Error('Method not implemented.');
}
OnSignUp() {
throw new Error('Method not implemented.');
}
  public isLoginView: boolean = false ;
  public requestLogin: RequestLogin = new RequestLogin();
  public requestSignup: RequestSignup = new RequestSignup();

  constructor(
    private loginService: LoginService, 
    private signupService: SignupService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
    this.requestSignup = new RequestSignup();
  }

  public switchToLogin(event: Event): void {
    event.preventDefault();
    this.isLoginView = true;
  }

  public switchToSignup(event: Event): void {
    event.preventDefault();
    this.isLoginView = false;

  }

  public onLogin(): void {
    this.loginService.Onlogin(this.requestLogin).subscribe({
      next: (data) => {
        console.log('Login bem-sucedido:', data);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Erro no login:', error);
        alert('Erro ao fazer login: ' + error.error.message);
      }
    })
  }

  public onSignUp(): void {
    console.log('Dados para signup:', this.requestSignup); 
    this.signupService.OnSignUp(this.requestSignup).subscribe({
      
      next: (data: any) => {
        console.log('Cadastro bem-sucedido:', data);
        alert('Cadastro feito')
        this.router.navigate(['/singup']);
      },
      error: (error) => {
        console.error('Erro no cadastro:', error);
        alert('Erro ao realizar cadastro: ' + error.error.message);
      }
    });
  }
}