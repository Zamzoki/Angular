import { Component } from '@angular/core';

const log = (target, name, descriptor) => {
  // store the original function in a variable
  const original = descriptor.value;
  
  // do some manipulations with descriptor.value, which is the function that will be executed
  
  // below, aSimpleMethod is overwritten
  // descriptor.value = function() {
  //   console.log("This function was changed")
  // }

  descriptor.value = (...args: any) => {
    // fac ca original sa apartina obiectului global, pt ca altfel ea tine de clasa AppComponent
    const result = original.apply(this, args);
    return "Result from decorator function: " + result; 
  }

  //this call displays "14"
  console.log(original(2, 7));
  
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
