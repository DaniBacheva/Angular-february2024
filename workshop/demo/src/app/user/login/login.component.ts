import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/shared/constans';

@Component({
  selector: 'app-login',
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  appEmailDomains = EMAIL_DOMAINS;
  constructor(private userService: UserService, private router:Router) { }

  login( form: NgForm): void {
    if (form.invalid) {
      return;
    }
   
    this.userService.login();
    this.router.navigate(['/'])
  }

}