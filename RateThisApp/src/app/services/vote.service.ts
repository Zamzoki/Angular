import { Injectable } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {IPost} from '../posts';
import {PostServices} from './post.service';

@Injectable()
export class VoteService {

  constructor(private authenticationService: AuthenticationService,
              private postServices: PostServices) {
  }

  handleVote(post: IPost) {
    const currentUserEmail = this.authenticationService.currentUser.email;

    if (post.voters.includes(currentUserEmail)) {
      post.voters = post.voters.filter(voter => voter !== currentUserEmail);
      this.postServices.updatePost(post);
    } else {
      post.voters.push(currentUserEmail);
      this.postServices.updatePost(post);
    }
  }
}
