import {Component, OnInit} from '@angular/core';
import {AuthenticationService, IUser} from '../../services/authentication.service';
import {PostServices} from '../../services';
import {IPost} from '../../posts';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: IUser = this.authenticationService.currentUser;
  posts: IPost[] = [];

  constructor(private authenticationService: AuthenticationService, private postService: PostServices) {

  }

  ngOnInit() {
    this.posts = this.postService.getMyPosts();
  }
}
