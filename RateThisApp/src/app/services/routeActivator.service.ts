import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { PostServices } from './post.service';

@Injectable()
export class RouteActivatorService implements CanActivate {

    constructor(private postServices: PostServices, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const postExists = !!this.postServices.getPost(+route.params['id']);

        if(!postExists) {
            this.router.navigate(['post/error']);
        }

        return postExists;
    }
}