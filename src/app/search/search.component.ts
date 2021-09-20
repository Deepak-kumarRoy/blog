import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 searchText: any='';
search:any;
  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.main.next(true);
    this.search=this.user.getProfileList();
  }

}
