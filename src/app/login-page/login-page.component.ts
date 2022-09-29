import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  registerForm: FormGroup = new FormGroup({
    charname: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    valpass: new FormControl(''),
  })
  constructor() { }

  ngOnInit(): void {
  }

  register() {

  }

  login() {
    console.log(this.loginForm.controls['username'].value)
  }

  matchValidator(): boolean {
    return this.registerForm.controls['password'].value == this.registerForm.controls['valpass'].value
  }
}
