import { Component } from '@angular/core';

@Component({
    selector: 'new-post-component',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
    
    private _canLeave: boolean = false;

    constructor() {

    }

    get canLeave() {
        return this._canLeave;
    }

    set canLeave(value: boolean) {

        if(value === undefined) {
            throw 'Provide a boolean value'
        }

        this._canLeave = value;
    }


}