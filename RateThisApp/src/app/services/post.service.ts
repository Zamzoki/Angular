import { Injectable } from '@angular/core';
import { IPost } from '../posts';
import { Subject } from 'rxjs';
import {AuthenticationService} from './authentication.service';

const POSTS: IPost[] = [];

@Injectable()
export class PostServices {
  constructor(private authenticationService: AuthenticationService) {
    const postsJson = JSON.parse(localStorage.getItem('posts'));

    if (postsJson) {
      for (const post of postsJson) {
        POSTS.push(post as IPost);
      }
    }
  }

  getUserPosts() {
    return POSTS.filter(post => post.userEmail === this.authenticationService.currentUser.email);
  }

  getPosts() {
      const subject = new Subject();

      setTimeout(() => {
          subject.next(POSTS);
          subject.complete();
      }, 100);

      return subject;
  }

  getPost(id: number) {
      const subject = new Subject();

      setTimeout(() => {
          subject.next(POSTS.find(post => post.id === id));
          subject.complete();
      }, 100);

      return subject;
  }

  addPost(newPost: IPost) {
    newPost.id = POSTS.length + 1;
    newPost.userName = this.authenticationService.currentUser.name;
    newPost.userEmail = this.authenticationService.currentUser.email;
    POSTS.push(newPost);

    localStorage.setItem(`posts`, JSON.stringify(POSTS));
  }

  sortPostsByTitle = (post1: IPost, post2: IPost) => {
    if (post1.title > post2.title) {
      return 1;
    } else if (post1.title < post2.title) {
      return -1;
    } else {
      return 0;
    }
  }

  sortPostsByFunny = (post1: IPost, post2: IPost) => {
    if (post1.categories.includes('funny') && post2.categories.includes('funny')) {
      return(this.sortPostsByTitle(post1, post2));
    } else if (!post1.categories.includes('funny') && post2.categories.includes('funny')) {
      return 1;
    } else if (post1.categories.includes('funny') && !post2.categories.includes('funny')) {
      return -1;
    } else {
      return(this.sortPostsByTitle(post1, post2));
    }
  }

  searchPosts(searchString: string): IPost[] {
    return POSTS.filter(post => post.title.toLowerCase().includes(searchString.trim().toLowerCase()));
  }
}

