import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../../common/utility/custom-spinner/custom-spinner.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginForm } from '../../../data/login.model';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CustomSpinnerComponent, ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

   // Helper methods to check form control validity
   isInvalid(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    return (
      control != null && control.invalid && (control.dirty || control.touched)
    );
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData: LoginForm = this.loginForm.value;
      this.router.navigate(['/admin/dashboard']);
    }
  }
}
