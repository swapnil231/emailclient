import { Component } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Matchpassword } from '../validators/matchpassword';
import { Uniqueusername } from '../validators/uniqueusername';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpForm = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this.usernameuni.validate]
      ),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchpass.validate] }
  );

  constructor(
    private matchpass: Matchpassword,
    private usernameuni: Uniqueusername,
    private auth_service: AuthService,
    private router_: Router
  ) {}

  onsubmit() {
    if (this.signUpForm.invalid) {
      return;
    }
    this.auth_service.signup(this.signUpForm.value).subscribe({
      next: (res) => {
        this.router_.navigateByUrl('/inbox');
      },
      error: (err) => {
        console.log(err);
        if (!err.status) {
          this.signUpForm.setErrors({ noccconnection: true });
          console.log('err2');
        } else {
          this.signUpForm.setErrors({ unKownerror: true });
        }
      },
    });
  }

  oncancle() {
    console.log(this.signUpForm.value);
  }
}
