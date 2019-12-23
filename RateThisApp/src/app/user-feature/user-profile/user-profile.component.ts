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

  sortByTitle = (post1: IPost, post2: IPost) => {
    if (post1.title > post2.title) {
      return 1;
    } else if (post1.title < post2.title) {
      return -1;
    } else {
      return 0;
    }
  }

  sortByFunny = (post1: IPost, post2: IPost) => {
    if (post1.categories.includes('funny') && post2.categories.includes('funny')) {
      return(this.sortByTitle(post1, post2));
    } else if (!post1.categories.includes('funny') && post2.categories.includes('funny')) {
      return 1;
    } else if (post1.categories.includes('funny') && !post2.categories.includes('funny')) {
      return -1;
    } else {
      return(this.sortByTitle(post1, post2));
    }
  }

  handleSortByNameButtonClick() {
    this.sortedByFunny = false;
    this.sortedByTitle = !this.sortedByTitle;

    if (this.sortedByTitle) {
      this.posts = this.sortedPosts.sort(this.sortByTitle);
    } else {
      this.posts = this.postsCache;
    }
  }

  handleSortByFunnyButtonClick() {
    this.sortedByTitle = false;
    this.sortedByFunny = !this.sortedByFunny;

    if (this.sortedByFunny) {
      this.posts = this.sortedPosts.sort(this.sortByFunny);
    } else {
      this.posts = this.postsCache;
    }
  }
}
