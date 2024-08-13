import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RequestSignup } from '../../../resources/models/services/request.signup';
import { SignupService } from '../../../resources/models/services/signup.service';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  public requestsignup!: RequestSignup;
signupObj: any;
requestSignup: any

  constructor(private signupservice: SignupService, private router:Router){}

}
