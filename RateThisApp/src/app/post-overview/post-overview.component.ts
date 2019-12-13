import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'post-overview',
    templateUrl: './post-overview.component.html',
    styleUrls: ['./post-overview.component.css']
})
export class PostOverviewComponent implements OnInit{

    post: any;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.post = this.route.snapshot.data['post'];
    }
}