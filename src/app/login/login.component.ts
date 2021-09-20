import { Component, OnDestroy, OnInit } from '@angular/core';
import {  FormControl,FormGroup, Validators} from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
 
  login = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required)
  });

  constructor(location: Location, private user: UserService, private router: Router) {
    // location.onUrlChange().subscribe(val =>{
    //   if(location.path() == "login"){
    //      = "signup";
    //   }
    // });
   }

  ngOnInit(): void {
    this.user.signup.next(true)
  }

  ngOnDestroy(){
    this.user.signup.next(false)
  }
  
  onSubmit(){
    if(this.login.get('email')?.value == "deepak@gmail.com" && this.login.get('password')?.value == "123456789")
    {
    this.router.navigate(['home']);
  }else{
    alert("please enter correct email and password")
  }
}
}
