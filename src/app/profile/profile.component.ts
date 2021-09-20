import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  data:any;
  userId: any;
  newData = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });
  follower = "";
  constructor(private user: UserService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe(resp => {
      this.userId = resp.id;
      this.data = this.user.getUserDetails(resp.id);
      if(this.data.followers.length == 1){
        this.follower = this.data.followers[0].userName;
      }else{
        this.follower = this.data.follower[0].userName + this.data.followers.length;
      }
    });
    this.user.main.next(true)
  }

  submit(){
    if (this.newData.get('newPassword')?.value !== this.newData.get('confirmPassword')?.value){
     alert(" Confirm Password should be same as New Password ")
   }else{
     console.log(this.newData.value)
   }
 }
  

  ngOnDestroy(){
    this.user.main.next(false)
  }

}
