import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/shared/constans';
import { appEmailValidator } from 'src/app/shared/validators/app-email.validator';

interface Profile {
  username: string,
  email: string,
  tel: string
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isEditMode: boolean = false;

  profileDetails: Profile = {
    username: "John",
    email: "john.doe@gmail.com",
    tel: "123 123 123",
  };

  form = this.fb.group({
    email: ["", [Validators.required, appEmailValidator(EMAIL_DOMAINS)]],
    username: ["", [Validators.required, Validators.minLength(5)]],
    tel: [""]
  })

  constructor(private fb: FormBuilder) { }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveProfile(): void {
    if (this.form.invalid) {
      return;
    }
    this.profileDetails = { ...this.form.value } as Profile
    this.toggleEditMode()
  }
}
