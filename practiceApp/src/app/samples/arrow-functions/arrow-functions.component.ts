import { Component, OnInit } from '@angular/core';

const myLogger = message => console.log(message);

// working with 'this' using ES5
function Car() {
  var self = this;
  this.seats = 4;

  this.timeout = function() {
    setTimeout(function() {
      // daca nu aveam self, cu this m-as fi referit la functia curenta
      console.log(self.seats++);
    }, 1000);
  }
}

class CarWithArrow {
  seats = 0;

  constructor() {
    this.seats = 6;
  }

  timeout() {
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
