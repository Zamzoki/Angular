import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { PostServices } from './post.service';

@Injectable()
export class RouteActivatorService implements CanActivate {

    constructor(private postServices: PostServices,
                private router: Router) {

    }

    async canActivate(route: ActivatedRouteSnapshot) {
      const post = await this.postServices.getPost(+route.params.id).toPromise();
      const postExists = !!post;

      if (!postExists) {
          await this.router.navigate(['post/error']);
      }

      return postExists;
    }
}
