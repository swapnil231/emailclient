import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AbstractControl,
  AsyncValidator,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class Uniqueusername implements AsyncValidator {
  constructor(private http: HttpClient, private auth_service: AuthService) {}

  validate = (control: AbstractControl<any, any>): any => {
    const { value } = control;

    return this.auth_service.usernameAvaliable(value).pipe(
      map((value) => {
        return null;
      }),
      catchError((err) => {
        console.log(err);
        if (err.error.username) {
          return of({ nonuniqueUserName: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  };
}
