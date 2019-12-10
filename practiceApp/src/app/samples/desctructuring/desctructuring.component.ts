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
var colors = ['red', 'green', 'blue'];
var oldRed = colors[0];
var oldGreen = colors[1];
var oldBlue = colors[2];

var [newRed, newGreen, newBlue] = ['red', 'green', 'blue'];
console.log(`Colors: ${newRed}, ${newGreen}, ${newBlue}`);

var [newRed2, , newBlue2] = ['red', 'green', 'blue'];

var pets = [
  {
    name: 'Rex',
    type: 'Dog',
    foods: {
      f1: 'meat',
      f2: 'more meat'
    }
  },
  {
    name: 'Tania',
    type: 'Cat',
    foods: {
      food1: 'tomatoes',
      food2: 'Jerry'
    }
  }
];

// i wrote an object literal similar to the type of objects in the 'pets' array
// that's a destructuring breakdown of the object in pets
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
