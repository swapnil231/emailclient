import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  constructor(private auth_service: AuthService, private router_: Router) {}
  signInForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  onsignin() {
    if (this.signInForm.invalid) {
      return;
    }

    this.auth_service.signin(this.signInForm.value).subscribe({
      next: () => {
        this.router_.navigateByUrl('/inbox');
      },
      error: ({ error }) => {
        if (error.username || error.password) {
          this.signInForm.setErrors({ creden: true });
        }
      },
    });
  }
}
