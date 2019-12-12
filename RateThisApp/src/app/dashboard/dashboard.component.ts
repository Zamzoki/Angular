import { Component, OnInit } from '@angular/core';
import { PostServices } from '../services/post.service';

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    posts: any[];

    constructor(private postService: PostServices) {

    }

    ngOnInit() {
        this.posts = this.postService.getPosts();
    }
}