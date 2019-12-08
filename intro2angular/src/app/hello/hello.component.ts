import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  myName = "David";
  bitwiseOperation = 2 | 5; // 010 | 101 => 111 = 7
  i = 0;
  someVariable = Math.random();

  constructor() { }

  doSomeTask() {
    console.log(`I called this method ${this.i++} times.`);
  }

  ngOnInit() {
    // setInterval(() => {
    //   this.someVariable = Math.random();
    // }, 50)
  }

}
