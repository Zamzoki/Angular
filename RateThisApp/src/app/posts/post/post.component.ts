import { Component, Input } from '@angular/core';

export interface IPost {
  id: number;
  title: string;
  userName: string;
  userEmail: string;
  categories: string[];
  description: string;
  info: { time: string, date: Date, location: string };
  imageSrc?: string;
  voters: string[];
}

@Component({
    selector: 'app-post-component',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent {
    @Input() post: IPost;

    constructor() {

    }
}
