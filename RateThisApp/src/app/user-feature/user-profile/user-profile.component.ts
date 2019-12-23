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
  postsCache: IPost[] = [];
  sortedPosts: IPost[] = [];
  posts: IPost[] = [];
  sortedByTitle = false;
  sortedByFunny = false;

  constructor(private authenticationService: AuthenticationService, private postService: PostServices) {

  }

  ngOnInit() {
    this.sortedPosts = this.postService.getUserPosts();
    this.postsCache = this.postService.getUserPosts();
    this.posts = this.postsCache;
  }

  handleSortByNameButtonClick() {
    this.sortedByFunny = false;
    this.sortedByTitle = !this.sortedByTitle;

    if (this.sortedByTitle) {
      this.posts = this.sortedPosts.sort(this.postService.sortPostsByTitle);
    } else {
      this.posts = this.postsCache;
    }
  }

  handleSortByFunnyButtonClick() {
    this.sortedByTitle = false;
    this.sortedByFunny = !this.sortedByFunny;

    if (this.sortedByFunny) {
      this.posts = this.sortedPosts.sort(this.postService.sortPostsByFunny);
    } else {
      this.posts = this.postsCache;
    }
  }
}
