import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  // Declare the properties that hold the form data
  email: string = '';
  password: string = '';

  // Method to handle form submission
  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Add logic to handle the login action, e.g., call an authentication service
  }
}