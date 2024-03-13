import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/app-email.validator';
import { EMAIL_DOMAINS } from 'src/app/shared/constans';
import { passwordsMatchValidator } from 'src/app/shared/validators/passwords-match';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
form = this.fb.group ({
  email:["", [ Validators.required, appEmailValidator(EMAIL_DOMAINS)]],
  username:["", [ Validators.required, Validators.minLength(5)]],
  tel:[""],
  passGroup: this.fb.group ({
    password:["", [ Validators.required, Validators.minLength(5)]],
    rePassword:["", [ Validators.required]],
  },
  {
    Validators:[passwordsMatchValidator("password", "rePassword")]
  }
  ),
})

  constructor(private fb: FormBuilder,  private userService: UserService, private router:Router) { }

  register() {
    if (this.form.invalid) {
      return;
    }
    const {
      username,
      email, 
      passGroup :{ password, rePassword}={},
     tel,
    } = this.form.value;

    console.log(this.form.value)

    this.userService.register(username!, email!,  password!, rePassword!, tel!)
    .subscribe(() => {
      this.router.navigate(['/login'])
    });
  }
}
