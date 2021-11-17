import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator } from '@angular/forms';
import { map } from 'rxjs';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (control: AbstractControl) => {
    const { value } = control;
    return this.authService.usernameAvailable(value).pipe(
      map(() => {
        console.log(value);
        return null;
      })
    );
  };
}
