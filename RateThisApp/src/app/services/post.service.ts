import { Injectable } from '@angular/core';
import { IPost } from '../posts';
import { Subject } from 'rxjs';
import {AuthenticationService} from './authentication.service';

const POSTS: IPost[] = [
  {
    id: 1,
    title: 'Never again',
    userName: 'Johhny Doe',
    userEmail: 'johnny@doe.com',
    categories: ['fail', 'funny'],
    description: 'I went to school with my dog and he waited for me in the rain',
    info: {
      time: '08:00 AM',
      date: new Date(2019, 0, 1),
      location: 'Iasi, Romania'
    },
    imageSrc: 'assets/never-again-img.jpg'
  },
  {
    id: 2,
    title: 'Once again',
    userName: 'Mary Juana',
    userEmail: 'mary@juana.com',
    categories: ['coincidence', 'funny'],
    description: 'I boiled the eggs for too long and now they\'re rock-hard',
    info: {
      time: '10:00 AM',
      date: new Date(2019, 1, 3),
      location: 'Botosani, Romania'
    },
    imageSrc: 'assets/once-again-img.jpg'
  },
  {
    id: 3,
    title: 'Marathon',
    userName: 'Danut',
    userEmail: 'danut@alergatoru.com',
    categories: ['funny', 'sport'],
    description: 'Bare feet running in the rain.',
    info: {
      time: '06:00 AM',
      date: new Date(2018, 3, 12),
      location: 'Pascani, Romania'
    },
    imageSrc: 'assets/marathon-img.jpeg'
  },
  {
    id: 4,
    title: 'Water fight',
    userName: 'Dave',
    userEmail: 'dav@yahoo.com',
    categories: ['water', 'sport'],
    description: 'White shirts are compulsory.',
    info: {
      time: '13:00',
      date: new Date(2020, 7, 15),
      location: 'Iasi, Romania'
    }
  },
  {
    id: 5,
    title: 'Eating contest',
    userName: 'Dave',
    userEmail: 'dav@yahoo.com',
    categories: ['funny', 'sport', 'food'],
    description: 'Eat burgers on the house, \'till you drop them out.',
    info: {
      time: '18:00',
      date: new Date(2019, 12, 20),
      location: 'Braila, Romania'
    }
  }
];

@Injectable()
export class PostServices {

    constructor(private authenticationService: AuthenticationService) {

    }

    getMyPosts() {
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
    }
}

