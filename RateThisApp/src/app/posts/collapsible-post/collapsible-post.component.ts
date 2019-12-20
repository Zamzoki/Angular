import {Component} from '@angular/core';

@Component({
  selector: 'app-collapsible-post',
  templateUrl: './collapsible-post.component.html',
  styleUrls: ['./collapsible-post.component.css']
})
export class CollapsiblePostComponent {
  private showContent = false;
  constructor() {
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
