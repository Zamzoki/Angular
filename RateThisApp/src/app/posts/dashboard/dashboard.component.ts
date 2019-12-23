import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IPost} from '..';

@Component({
    selector: 'app-dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    posts: any;
    searchString = '';

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.posts = this.route.snapshot.data.posts;
    }

    searchPosts(searchString: string): IPost[] {
      return this.route.snapshot.data.posts.filter(post => post.title.toLowerCase().includes(searchString.toLowerCase()));
    }

    handlePostSearch() {
      if (this.searchString) {
        this.posts = this.searchPosts(this.searchString);
      } else {
        this.posts = this.route.snapshot.data.posts;
      }
    }
}
