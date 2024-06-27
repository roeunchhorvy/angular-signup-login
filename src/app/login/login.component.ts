import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  loginForm: FormGroup;
  signupForm: FormGroup;
  loginMessage: string = '';
  signupMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      loginUsername: ['', Validators.required],
      loginPassword: ['', Validators.required]
    });

    this.signupForm = this.fb.group({
      signupEmail: ['', [Validators.required, Validators.email]],
      signupUsername: ['', Validators.required],
      signupPassword: ['', Validators.required]
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnInit(): void {}

  onLogin() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('loginUsername')?.value;
      const password = this.loginForm.get('loginPassword')?.value;
      console.log('Attempting login with:', { username, password }); // Log the login attempt
      this.authService.login(username, password);
    } else {
      console.error('Login form is invalid');
    }
  }

  onSignup() {
    if (this.signupForm.valid) {
      const email = this.signupForm.get('signupEmail')?.value;
      const username = this.signupForm.get('signupUsername')?.value;
      const password = this.signupForm.get('signupPassword')?.value;
      this.authService.signup(email, username, password).subscribe(
        response => {
          console.log('Signup successful:', response);
          this.signupMessage = 'Signup successful!';
        },
        error => {
          console.error('Signup error:', error);
          this.signupMessage = 'Signup failed. Please try again.';
        }
      );
    } else {
      console.error('Signup form is invalid');
    }
  }
}
