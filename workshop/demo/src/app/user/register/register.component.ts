import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService: UserService, private router:Router) { }

  register(email: string, password: string): void {

    // hardcoded data
    //this.userService.register();
    this.router.navigate(['/'])
  }
}
