import {Component, OnInit} from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {
  message$: Observable<string>;
  Nan: number;

  private messages = [
    'Hey there!',
    'Hello world!',
    'Hi!'
  ];

  constructor() {
  }

  ngOnInit() {
    this.resend();
  }

  // map: takes a projection function and applies it to each value that comes from the source observable
  // take indicates how many values to take
  resend() {
    this.message$ = interval(1000).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }
}
