import { Component, OnInit } from '@angular/core';

interface loggerType {
  (message: string): void
}

const myLogger: loggerType = message => console.log(message);

function Car() {
  var self = this;
  this.seats = 4 as number;

  this.timeout = function() {
    setTimeout(function() {
      console.log(self.seats++);
    }, 1000);
  }
}

class CarWithArrow {
  seats: number = 0;

  constructor() {
    this.seats = 6;
  }

  timeout : () => void = () => {
    setTimeout(() => {
      console.log(this.seats++);
    }, 1000);
  }
}

@Component({
  selector: 'app-arrow-functions',
  templateUrl: './arrow-functions.component.html',
  styleUrls: ['./arrow-functions.component.css']
})
export class ArrowFunctionsComponent implements OnInit {
  
  constructor() {

  }

  ngOnInit() {
    myLogger('Testing out arrow functions.');

    var c = new Car();
    c.timeout();

    var cArrow = new CarWithArrow();
    cArrow.timeout();
  }
}
