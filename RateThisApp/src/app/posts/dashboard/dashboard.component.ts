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
    searchString = '';

    constructor(private route: ActivatedRoute, private postServices: PostServices) {

    }

    ngOnInit() {
        this.posts = this.route.snapshot.data.posts;
    }

    handlePostSearch() {
      if (this.searchString) {
        this.posts = this.postServices.searchPosts(this.searchString);
      } else {
        this.posts = this.route.snapshot.data.posts;
      }
    }
}
