import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PostServices } from './post.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PostListResolver implements Resolve<any>{

    constructor(private postServices: PostServices) {

    }

    resolve() {
        return this.postServices.getPosts().pipe(map(posts => posts));
    }
}