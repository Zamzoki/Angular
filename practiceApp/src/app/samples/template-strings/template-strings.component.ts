import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-strings',
  templateUrl: './template-strings.component.html',
  styleUrls: ['./template-strings.component.css']
})
export class TemplateStringsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const a = 2;
    const b = 3;

    console.log('Log a with string concatenation: ' + a);
    console.log(`Log b with template string: ${b}`);
    console.log('Add a and b with string concatenation: ' + (a + b));
    console.log(`Add a and b with template string: ${a + b}`);
  }

}
