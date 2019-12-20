import { Injectable } from '@angular/core';
import { IPost } from '../posts';
import { Subject } from 'rxjs';

const POSTS: IPost[] = [
  {
      id: 1,
      title: 'Never again',
      userName: 'Johhny Doe',
      categories: ['fail', 'funny'],
      description: 'I went to school with my dog and he waited for me in the rain',
      info: {
          time: '08:00 AM',
          date: new Date(2019, 0, 1),
          location: 'Iasi, Romania'
      }
  },
  {
      id: 2,
      title: 'Once again',
      userName: 'Mary Juana',
      categories: ['coincidence', 'funny'],
      description: 'I boiled the eggs for too long and now they\'re rock-hard',
      info: {
          time: '10:00 AM',
          date: new Date(2019, 1, 3),
          location: 'Botosani, Romania'
      }
  },
  {
    id: 3,
    title: 'Marathon',
    userName: 'Danut',
    categories: ['funny', 'sport'],
    description: 'Bare feet running in the rain.',
    info: {
      time: '06:00 AM',
      date: new Date(2018, 3, 12),
      location: 'Pascani, Romania'
    }
  }
];

@Injectable()
export class PostServices {

    constructor() {

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
      POSTS.push(newPost);
    }
}

