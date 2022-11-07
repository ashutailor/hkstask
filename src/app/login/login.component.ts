import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.pattern("^[A-za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")),
      password: new FormControl('', [Validators.required])
    })
  }

  // for sign up new user
  SignUpUser(email: any, password: any) {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("SignUp Success please Login")
    this.loginForm.reset();
  }

// login user
  loginUser() {
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");

    // check email and Password
    if (this.loginForm.controls["email"].value == email && this.loginForm.controls["password"].value == password) {
      this.router.navigate(['/Dashboard']);
    }
    else{
      alert("Please SignUp First")
      this.loginForm.reset();
    }
  }
}