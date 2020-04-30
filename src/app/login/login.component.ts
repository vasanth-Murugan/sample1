import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../auth.service"; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    email: ['',Validators.required],
    password: ['',Validators.required]
  });
  }
  get formControls() { return this.loginForm.controls;}

  login() {
    this.isSubmitted = true;
    if(this.loginForm.invalid) {
      return; 
    }
    this.authService.login();
    this.router.navigateByUrl('/admin');
  }

}



