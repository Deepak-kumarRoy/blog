import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
alert:boolean=false;
  newData = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.main.next(true);
  }

  submit(){
   if (this.newData.get('newPassword')?.value !== this.newData.get('confirmPassword')?.value){
    alert(" Confirm Password should be same as New Password ")
  }else{
    this.alert=true;
    this.newData.reset('');
  }
}
}
