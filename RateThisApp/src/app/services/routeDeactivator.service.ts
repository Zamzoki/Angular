import { CanDeactivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { NewPostComponent } from '../new-post/new-post.component';

interface INewPost {
    canLeave: boolean;
}

@Injectable()
export class RouteDeactivatorService implements CanDeactivate<NewPostComponent> {

    constructor() {

    }

    canDeactivate(component: INewPost) {
        if(component.canLeave) {
            return true;
        }
        return window.confirm('You did not save this post. Do you really want to leave?');
    }
}