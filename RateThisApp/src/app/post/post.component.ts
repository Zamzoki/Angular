import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'post-component',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent {

    @Input() post: any;

    constructor(private router: Router) {

    }
}