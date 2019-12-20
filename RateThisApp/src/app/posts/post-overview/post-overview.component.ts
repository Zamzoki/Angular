import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IPost} from '..';

@Component({
    selector: 'app-post-overview',
    templateUrl: './post-overview.component.html',
    styleUrls: ['./post-overview.component.css']
})
export class PostOverviewComponent implements OnInit {

    post: IPost;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.post = this.route.snapshot.data.post;
    }
}
