import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';
  myVariable = Math.random().toString();
  myDisabledValue = false;

  constructor() {
    this.myDisabledValue = false;

    setInterval(() => {
      this.myVariable = Math.random().toString()
      this.myDisabledValue = Math.random() > 0.5
    }, 1000);
  }

  callMyFunction() {
    console.log("Button clicked!");
    this.myVariable = "1";
  }
};
