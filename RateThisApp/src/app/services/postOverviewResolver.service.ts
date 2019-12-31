import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { PostServices } from './post.service';
import { map } from 'rxjs/operators';

// in route, resolve: { posts: PostOverviewResolver}
// resolve() in PostOverviewResolver returns the observable; when data gets fetched, posts will be assigned the fetched data
@Injectable()
export class PostOverviewResolver implements Resolve<any> {

    constructor(private postServices: PostServices) {

    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.postServices.getPost(+route.params.id).pipe(map(post => post));
    }
}
