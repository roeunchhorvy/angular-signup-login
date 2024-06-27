// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.css'
// })
// export class SignupComponent {

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm = {
    email: '',
    username: '',
    password: ''
  };

  onSignup() {
    // Implement sign up logic (e.g., call a sign up service)
    console.log('Signing up with:', this.signupForm);
    // Example of redirecting after successful sign up
    // Replace with your actual routing logic
    // this.router.navigate(['/login']);
  }
}



