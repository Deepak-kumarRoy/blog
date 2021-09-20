import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile:any;
  userId: any;
  postForm = new FormGroup({
    postMsg: new FormControl(''),
    image: new FormControl('')
  });
  
  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
    this.profile=this.user.getProfileList();
    this.user.main.next(true);
  }

  save() {}

  savePost(){
    console.log(this.postForm.value)
    let loggedInUser = this.user.getLoggedInUserDetails();
    let postDetails = this.postForm.value;
    postDetails['userId'] = loggedInUser['id'];
    postDetails['userName'] = loggedInUser['name'];
    postDetails['datePosted'] = new Date().getDate() + " " + new Date().getMonth() + " " + new Date().getFullYear();
    postDetails['replies'] = [];
    this.user.savePost(postDetails);
    this.postForm.reset();
  }

  postComment(index: any, comment: any) {
    let loggedInUser = this.user.getLoggedInUserDetails();
    let reply = {
      'userId': loggedInUser['id'],
      'userName': loggedInUser['name'],
      'datePosted': new Date().getDate() + " " + new Date().getMonth() + " " + new Date().getFullYear(),
      'postMsg': comment.value
    }
    this.user.saveReply(index, reply);
    comment.value = '';
  }
  routeToProfile() {
    this.router.navigate(['profile/' + this.userId]);
  }

}
