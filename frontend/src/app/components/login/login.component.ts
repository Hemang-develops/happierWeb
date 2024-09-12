import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{
  constructor (private router : Router, private fb: FormBuilder){}
  // Declare the properties that hold the form data
  loginForm !:FormGroup;
  loading = false;
  submitted = false;
  // email: string = '';
  // password: string = '';

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(8)] // todo password validations
    })
  }

  // Method to handle form submission
  onSubmit() {
    if(this.loginForm.valid){
        this.submitted = true;
      console.log('Form value:', this.loginForm.value);
    }
    this.loading = true;
    this.router.navigate(['/dashboard']);
    // Add logic to handle the login action, e.g., call an authentication service
  }

  get f(){
    return this.loginForm?.controls;
  }
}