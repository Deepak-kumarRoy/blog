import { Location } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText:any;
  main: boolean=true;
  login: boolean=true;
  signup:boolean=true;
  userId: string;

  constructor(private user:UserService, private router: Router) {

    this.user.main.subscribe(res =>{
      this.main = res
    });

    this.user.login.subscribe(res =>{
      this.login = res
    });

    this.user.signup.subscribe(res =>{
      console.log("sajfgsajk")
      console.log(res)
      setTimeout(() => {
        this.signup = res;
      }, 400);
    });

    this.userId = this.user.getLoggedInUserDetails().id;
   }

  ngOnInit(): void {
  }

  routeToProfile() {
    this.router.navigate(['profile/' + this.userId]);
  }

}
