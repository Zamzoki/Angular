import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weak-map-weak-set',
  templateUrl: './weak-map-weak-set.component.html',
  styleUrls: ['./weak-map-weak-set.component.css']
})
export class WeakMapWeakSetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Using WeakSet
    const weakSet = new WeakSet();
    // No size, entries or values
    // Cannot use forEach (not enumerable), can't mix types
    const person1 = { name: 'Fred' };
    const person2 = { name: 'Michelle' };

    weakSet.add(person1);
    weakSet.add(person2);
    // weakSet.add(3);
    // Does not work because 3 is not of type object.

    if (weakSet.has(person1)) {
      console.log('Found person!');
    }
    weakSet.delete(person2); // Delete single item


    // Using WeakMap
    const weakMap = new WeakMap();
    // No size, entries or values
    // Cannot use forEach (not enumerable), key must be an object
    const dog1 = { name: 'Rex' };
    const dog2 = { name: 'Timmy'};
    const key1 = { key: '123' };
    const key2 = { key: '321' };

    weakMap.set(key1, dog1);
    weakMap.set(key2, dog2);

    const dog = weakMap.get(key2);
    console.log(`Map has dog key 321: ${dog.name}`);

    if (weakMap.has(key1)) {
      console.log('Found dog!');
    }
    weakMap.delete(key2); // Delete single item.
  }

}
