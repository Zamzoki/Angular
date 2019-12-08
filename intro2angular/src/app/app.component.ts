import { Component } from '@angular/core';

// log as a class decorator
const overwriteConstructorDecorator = classConstructor => {
  return class extends classConstructor {
    constructor(arg1: Number, arg2: Number) {
      super(arg1, arg2);
      let incr1 = Number (arg1) + 1;
      let incr2 = Number (arg2) + 1;
      console.log("Incremented in decorator: " + incr1 + ", " + incr2);
    }
  };

  // return null; 
}

const log = classConstructor => {
  console.log("Log something then run original constructor.");
}

@log
class MyExampleClass {
  constructor(arg1: Number, arg2: Number) {
    console.log("MyExampleClass constructor call: " + arg1 + ", " + arg2);
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
    console.log("AppComponent class constructor call: ", this.aSimpleMethod(5, 2));
  }

  aSimpleMethod(a, b) {
    return a*b;
  }
};
