import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServices } from '../services/post.service';

@Component({
    selector: 'post-overview',
    templateUrl: './post-overview.component.html',
    styleUrls: ['./post-overview.component.css']
})
export class PostOverview implements OnInit{

    post: any;

    constructor(private route: ActivatedRoute, private postServices: PostServices) {

    }

    ngOnInit() {
        this.post = this.postServices.getPost(+this.route.snapshot.params['id']);
    }
}