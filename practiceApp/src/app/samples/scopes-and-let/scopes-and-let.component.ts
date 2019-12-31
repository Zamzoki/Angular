import { Component, OnInit } from '@angular/core';

var age = 55;

for (let i = 0; i < 5; i++) {
  age += 5;
}

try {
  // i as let is not visible here
  // i as var would be visible
  // console.log(i);
} catch (e) {
  console.log('i is out of scope due to using let!');
}

@Component({
  selector: 'app-scopes-and-let',
  templateUrl: './scopes-and-let.component.html',
  styleUrls: ['./scopes-and-let.component.css']
})
export class ScopesAndLetComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
