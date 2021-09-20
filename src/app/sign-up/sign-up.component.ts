import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {
alert:boolean=false;
  SignUp = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    C_password: new FormControl('', Validators.required)
  });
  constructor(private user:UserService, private router: Router) { }

  ngOnInit(): void {
    this.user.login.next(true)
  }

  ngOnDestroy(){
    this.user.login.next(false)
  }
  
  submit(){
    if (this.SignUp.get('password')?.value !== this.SignUp.get('C_password')?.value){
      alert(" Confirm Password should be same as New Password ");
    }else{
      this.alert=true;
      this.SignUp.reset('');
      // this.router.navigate(['login']);
    }
    // this.user.saveDetails(this.SignUp.value);
  }

}
