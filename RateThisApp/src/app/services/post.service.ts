import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

let POSTS = [
    {
        id: 1,
        title: 'Never again',
        user: 'Johhny Doe',
        categories: ['fail', 'funny'],
        description: 'I went to school with my dog and he waited for me in the rain',
        info: {
            time: '8 am',
            date: '1/1/19',
            location: 'Iasi, Romania'
        }
    },
    {
        id: 2,
        title: 'Once again',
        user: 'Mary Juana',
        categories: ['coincidence', 'funny'],
        description: 'I boiled the eggs for too long and now they\'re rock-hard',
        info: {
            time: '10 am',
            date: '2/3/19',
            location: 'Botosani, Romania'
        }
    }
];;

@Injectable()
export class PostServices {
    
    constructor() {
        
    }
    
    getPosts() {
        let subject = new Subject();

        setTimeout(() => {
            subject.next(POSTS); 
            subject.complete(); 
        }, 100);

        return subject;
    }

    getPost(id: number) {
        let subject = new Subject();

        setTimeout(() => {
            subject.next(POSTS.find(post => post.id = id));
            subject.complete();
        }, 100);

        return subject;
    }
}

