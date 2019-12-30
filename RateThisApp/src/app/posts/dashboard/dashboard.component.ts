import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PostServices} from '../../services';

@Component({
    selector: 'app-dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    posts: any;
    foundPosts: any;
    searchString = '';

    constructor(private route: ActivatedRoute, private postServices: PostServices) {

    }

    ngOnInit() {
        this.posts = this.route.snapshot.data.posts;
    }

    handlePostSearch() {
      if (this.searchString) {
        this.foundPosts = this.postServices.searchPosts(this.searchString);
      } else {
        this.foundPosts = this.route.snapshot.data.posts;
      }
    }
}
