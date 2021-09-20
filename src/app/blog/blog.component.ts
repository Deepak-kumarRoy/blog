import { Component, Input, NgZone, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input('userId') userId: any;
  tweets: any[] = [];
  constructor(private user: UserService, private ngZone: NgZone) { }

  ngOnChanges(): void {
    this.ngZone.run(() => {
      this.tweets = this.user.getTweetList(this.userId);
      console.log(this.tweets)
    })
  }

  ngOnInit() {}
}
