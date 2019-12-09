import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textVariable = "app";
  otherTextVariable = "otherApp";

  updateTextVariable(e) {
    this.textVariable = e.target.value;
    //console.log(e.target.value);
  }
};
