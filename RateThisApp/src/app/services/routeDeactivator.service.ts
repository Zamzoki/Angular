import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { NewPostComponent } from '../posts';

interface INewPost {
    canLeave: boolean;
}

@Injectable()
export class RouteDeactivatorService implements CanDeactivate<NewPostComponent> {

    constructor() {

    }

    canDeactivate(component: INewPost) {
        if (component.canLeave) {
            return true;
        }
        return window.confirm('You did not save this post. Do you really want to leave?');
    }
}
