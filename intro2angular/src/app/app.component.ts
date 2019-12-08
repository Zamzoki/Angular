import { Component } from '@angular/core';

// const log = (className) => {
//   return (...args) => {
//     console.log("Arguments passed to this class's constructor are ", args);
//     return new className(args);
//   }
// }

// log as a class decorator
const log = className => {
  return class extends className {
    constructor(arg1: Number, arg2: Number) {
      super(arg1, arg2);
      let incr1 = Number (arg1) + 1;
      let incr2 = Number (arg2) + 1;
      console.log("Incremented in decorator: " + incr1 + ", " + incr2);
    }
  };
}

@log
class MyExampleClass {
  constructor(arg1: Number, arg2: Number) {
    console.log("Constructor called with arguments " + arg1 + ", " + arg2);
  };
};

const myClass = new MyExampleClass(5, 10);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';

  constructor() {
    console.log("In constructor: ", this.aSimpleMethod(5, 2));
  }

  aSimpleMethod(a, b) {
    return a*b;
  }
};
