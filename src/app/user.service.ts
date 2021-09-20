import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedInUser = {
    "id": "roydeepak01.miblog",
    "name": "Deepak Kumar Roy",
    "email": "deepakroy@gamil.com",
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",
    "followers": ["Subham", "Rohit", "Sunil"],
    "following": "dasarijit@gamil.com"
  }

  users = [
    {
      "id": "roydeepak01.miblog",
      "name": "Deepak Kumar Roy",
      "email": "deepakroy@gamil.com",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",
      "followers": [
        {
          "userId": 'agarwalrohit01.miblog',
          "userName": 'Rohit Agarwal'
        },
        {
          "userId": 'chauhansunil01.miblog',
          "userName": 'Sunil Chauhan'
        }
      ],
      "following": [
        {
          "userId": 'chauhansunil01.miblog',
          "userName": 'Sunil Chauhan'
        }
      ]
    },
    {
      "id": "agarwalrohit01.miblog",
      "name": "Rohit Agarwal",
      "email": "rohitagarwal@gamil.com",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",
      "followers": [
        {
          "userId": 'chauhansunil01.miblog',
          "userName": 'Sunil Chauhan'
        },
        {
          "userId": 'roydeepak01.miblog',
          "userName": 'Deepak Kumar Roy'
        }
      ],
      "following": [
        {
          "userId": 'singhpravesh01.miblog',
          "userName": 'pravesh Singh'
        }
      ]
    },
    {
      "id": "chauhansunil01.miblog",
      "name": "Sunil Chauhan",
      "email": "sunilchauhan@gamil.com",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",
      "followers": [
        {
          "userId": 'roydeepak01.miblog',
          "userName": 'Deepak Kumar Roy'
        },
        {
          "userId": 'singhpravesh01.miblog',
          "userName": 'pravesh Singh'
        } 
      ],
      "following": [
        {
          "userId": 'agarwalrohit01.miblog',
          "userName": 'Rohit Agarwal'
        }
      ]
    },
    {
      "id": "singhpravesh01.miblog",
      "name": "pravesh Singh",
      "email": "praveshsingh@gamil.com",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",
      "followers": [
        {
          "userId": 'agarwalrohit01.miblog',
          "userName": 'Rohit Agarwal'
        }
      ],
      "following": [
        {
          "userId": 'chauhansunil01.miblog',
          "userName": 'Sunil Chauhan'
        }
      ]
    }
  ];

  posts = [
    {
      'userId': 'agarwalrohit01.miblog',
      'userName': 'Rohit Agarwal',
      'datePosted': '14 Nov, 2019',
      'postMsg': 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tiumerror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      'image': 'https://cobrareview.com/wp-content/uploads/2019/07/SPRING-WATER-COBRA.jpg',
      'replies': [
        {
          'userId': 'singhpravesh01.miblog',
          'userName': 'pravesh Singh',
          'datePosted': '15 Nov, 2019',
          'postMsg': 'Voluptatem accusantium doloremque laudan tiumerror sit voluptatem',
        }
      ]
    },
    {
      'userId': 'chauhansunil01.miblog',
      'userName': 'Sunil Chauhan',
      'datePosted': '13 Nov, 2019',
      'postMsg': 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tiumerror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      'image': 'https://cobrareview.com/wp-content/uploads/2019/07/SPRING-WATER-COBRA.jpg',
      'replies': [
        {
          'userId': 'agarwalrohit01.miblog',
          'userName': 'Rohit Agarwal',
          'datePosted': '14 Nov, 2019',
          'postMsg': 'Voluptatem accusantium doloremque laudan tiumerror sit voluptatem',
        }
      ]
    },
    {
      'userId': 'singhpravesh01.miblog',
      'userName': 'Pravesh Singh',
      'datePosted': '12 Nov, 2019',
      'postMsg': 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tiumerror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvi20QIOFsDhFVwyyb7Udxftu5i8484aqPRagPBBIt9GlK4Naw',
      'replies': [
        {
          'userId': 'chauhansunil01.miblog',
          'userName': 'Sunil Chauhan',
          'datePosted': '13 Nov, 2019',
          'postMsg': 'Voluptatem accusantium doloremque laudan tiumerror sit voluptatem',
        }
      ]
    }
  ]

  constructor() { }

  main = new BehaviorSubject(false);
  login = new BehaviorSubject(false);
  signup = new BehaviorSubject(false);

  getUserDetails(id: any) {
    return this.users.find(user => user.id == id);
  }

  saveUser() {
    // this.data.push()
  }

  getProfileList() {
    return this.posts;
  }

  savePost(profileDetails: any) {
    this.posts.splice(0, 0, profileDetails);
  }

  getTweetList(id: any) {
    return this.posts.filter(post => post.userId == id);
  }

  getLoggedInUserDetails() {
    return this.loggedInUser;
  }

  saveReply(index: any, reply: any) {
    this.posts[index].replies.push(reply);
  }
}
