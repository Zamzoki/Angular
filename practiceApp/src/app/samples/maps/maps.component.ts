import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = new Map();

    map.set(1, 'Danut');
    map.set('2', 'Ionel');
    map.set(3, 'Marcel');

    if (map.has(1)) {
      console.log('Map has key 1');
    }

    if (map.has('2')) {
      console.log(`Got value from key 2: ${map.get('2')}`);
    }

    console.log('ITERATE WITH FOREACH: ');
    map.forEach((value, key) => {
      console.log(`Value at key ${key} is ${value}`);
    });

    console.log('ITERATE WITH FOR: ');
    for (const [key, val] of map) {
      console.log(`Value at key ${key} is ${val}`);
    }

    map.clear();
    console.log('ITERATE AFTER CLEAR: ');
    for (const [key, val] of map) {
      console.log(`Value at key ${key} is ${val}`);
    }
  }

}
