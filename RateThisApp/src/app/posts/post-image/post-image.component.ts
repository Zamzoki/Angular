import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.css']
})
export class PostImageComponent {
  @Input() imageSrc: string;
  @Output() hideImage: EventEmitter<any>;

  constructor() {
    this.hideImage = new EventEmitter<any>();
  }

  handleHideImage() {
    this.hideImage.emit('Image hidden from child component');
  }
}
