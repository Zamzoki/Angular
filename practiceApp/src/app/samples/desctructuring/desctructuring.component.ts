import { Component, OnInit } from '@angular/core';

// new destructuring
// destructuring an array
var [total, tax] = [5, 0.5];
console.log('Destructuring an array');
console.log(`Total: ${total}, tax: ${tax}`)

// destructuring an object
var {total2, tax2} = {total2: 5, tax2: 0.5};
console.log('Destructuring an object literal');
console.log(`Total: ${total2}, tax: ${tax2}`);

// old
var colors: string[] = ['red', 'green', 'blue'];
var oldRed: string = colors[0];
var oldGreen: string = colors[1];
var oldBlue: string = colors[2];

var [newRed, newGreen, newBlue] = ['red', 'green', 'blue'];
console.log(`Colors: ${newRed}, ${newGreen}, ${newBlue}`);

var [newRed2, , newBlue2] = ['red', 'green', 'blue'];

interface petType {
  name: string, 
  type: string, 
  foods: {
    food1: string, 
    food2: string
  }
}

var pet : petType = {
  name: 'Tim',
  type: 'Cow',
  foods: {
    food1: 'hay',
    food2: 'grass'
  }
}

var pets = [
  <petType>{
    name: 'Rex',
    type: 'Dog',
    foods: {
      food1: 'meat',
      food2: 'more meat'
    }
  },
  {
    name: 'Tania',
    type: 'Cat',
    foods: {
      food1: 'tomatoes',
      food2: 'Jerry'
    }
  } as petType
];

// i wrote an object literal similar to the type of objects in the 'pets' array
// that's a destructuring breakdown of the object from pets
for(var {name: n, type: t, foods: {food1: f1, food2: f2}} of pets) {
  console.log(`Pet ${n} which is a ${t} likes ${f1} and ${f2}.`);
}

@Component({
  selector: 'app-desctructuring',
  templateUrl: './desctructuring.component.html',
  styleUrls: ['./desctructuring.component.css']
})
export class DesctructuringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
