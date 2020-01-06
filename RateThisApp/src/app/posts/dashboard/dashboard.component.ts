import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService, PostServices} from '../../services';
import {VoteService} from '../../services';
import {IPost} from '..';

@Component({
    selector: 'app-dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    posts: any;
    foundPosts: any;
    searchString = '';
    iconColor: string;

    constructor(private route: ActivatedRoute,
                private postServices: PostServices,
                private router: Router,
                private authenticationService: AuthenticationService,
                private voteService: VoteService) {

    }

    ngOnInit() {
        this.posts = this.route.snapshot.data.posts;
    }

    handlePostSearch() {
      if (this.searchString) {
        this.foundPosts = this.postServices.searchPosts(this.searchString);
      } else {
        this.foundPosts = this.route.snapshot.data.posts;
      }
    }

    navigateToPost(postId) {
      this.router.navigate(['post', postId]);
    }

    handleVote(post: IPost) {
      this.voteService.handleVote(post);
    }

    isVotedByCurrentUser(post: IPost) {
      if (post.voters.includes(this.authenticationService.currentUser.email)) {
        this.iconColor = 'red';
        return true;
      }
      this.iconColor = 'black';
      return false;
    }
}
