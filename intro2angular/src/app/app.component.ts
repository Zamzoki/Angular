import { Component } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target, name, descriptor);
  // store the original function in a variable
  const original = descriptor.value;
  
  // do some manipulations with descriptor.value, which is the function that will be executed
  
  // below, aSimpleMethod is overwritten with the method above
  // descriptor.value = function() {
  //   console.log("This function was changed")
  // }

  // below, I create a method in which I pass some arguments
  descriptor.value = function(...args)
  {
    console.log("Arguments ", args, " were passed in this function");
    const result = original.apply(this, args);
    console.log("The result of the function is ", result);
    return "Result from decorator function: " + result; 
  }
  
  // this call will display "Hey there!"
  //original();
  
  // return the descriptor
  return descriptor;
}

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

  // in this case, log is a member decorator
  @log
  aSimpleMethod(a, b) {
    return a*b;
  }
}
