import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    posts: any;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.posts = this.route.snapshot.data['posts'];
    }
}