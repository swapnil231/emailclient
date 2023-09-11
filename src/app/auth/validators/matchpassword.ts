import { Injectable } from '@angular/core';
import {
  Validator,
  FormGroup,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class Matchpassword implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const { password, passwordConfirmation } = control.value;
    if (password === passwordConfirmation) {
      return null;
    } else {
      return { passworddontmath: true };
    }
  }
  registerOnValidatorChange(fn: () => void): void {
    throw new Error('method not implemented');
  }
}
