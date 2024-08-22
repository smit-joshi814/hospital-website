import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../../common/utility/custom-spinner/custom-spinner.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginCredentials } from '../../../data/login.model';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CustomSpinnerComponent, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent {
  loginForm: FormGroup;
  message:string="";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
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
      const newLogin: LoginCredentials = {
        email: this.loginForm.value.email.trim(),
        password: this.loginForm.value.password.trim(),
      };
      console.log(newLogin);
      this.loginService.login(newLogin).subscribe(
        (data)=> {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/admin/dashboard']);
        },
        (error)=> {
          this.message="Invalid Email or Password";
          console.log(error);
        }
      );
    }
  }
}
