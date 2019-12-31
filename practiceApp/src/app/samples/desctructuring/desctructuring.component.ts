import { Component, OnInit } from '@angular/core';

// new destructuring
// destructuring an array
const [total, tax] = [5, 0.5];
console.log('Destructuring an array');
console.log(`Total: ${total}, tax: ${tax}`);

// destructuring an object
const {total2, tax2} = {total2: 5, tax2: 0.5};
console.log('Destructuring an object literal');
console.log(`Total: ${total2}, tax: ${tax2}`);

// old
const colors: string[] = ['red', 'green', 'blue'];
const oldRed: string = colors[0];
const oldGreen: string = colors[1];
const oldBlue: string = colors[2];
console.log(`Old colors: ${oldRed}, ${oldGreen}, ${oldBlue}`);

const [newRed, newGreen, newBlue] = ['red', 'green', 'blue'];
console.log(`New colors: ${newRed}, ${newGreen}, ${newBlue}`);

const [newRed2, , newBlue2] = ['red', 'green', 'blue'];
console.log(`Skipped a variable: ${newRed2}, ${newBlue2}`);

interface PetType {
  name: string;
  type: string;
  foods: {
    food1: string
    food2: string
  };
}

const pet: PetType = {
  name: 'Tim',
  type: 'Cow',
  foods: {
    food1: 'hay',
    food2: 'grass'
  }
};
console.log(pet);

const pets = [
  {
    name: 'Rex',
    type: 'Dog',
    foods: {
      food1: 'meat',
      food2: 'more meat'
    }
  } as PetType,
  {
    name: 'Tania',
    type: 'Cat',
    foods: {
      food1: 'tomatoes',
      food2: 'Jerry'
    }
  } as PetType
];

// i wrote an object literal similar to the type of objects in the 'pets' array
// that's a destructuring breakdown of the object from pets
for (const {name: n, type: t, foods: {food1: f1, food2: f2}} of pets) {
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
