import { Component, OnInit } from '@angular/core';

interface loggerType {
  (message: string): void;
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
  private _seats: number = 0;

  constructor() {
    this._seats = 6;
  }

  get seats() {
    return this._seats;
  }

  set seats(value: number) {
    this._seats = value;
  }

  // seen as a property of the class; still needs to be called with '()' to execute
  timeout : () => void = () => {
    setTimeout(() => {
      console.log(this._seats++);
    }, 1000);
  }

  // seen as a method/ function
  timeout2() : void {
    setTimeout(() => {
      console.log(this._seats++);
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
    console.log(`Expected 6 from constructor: ${cArrow.seats}`);
    cArrow.seats = 3;
    console.log(`Expected 3 from setter: ${cArrow.seats}`);
    cArrow.timeout();
    cArrow.timeout2();
  }
}
