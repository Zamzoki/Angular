import { Component } from '@angular/core';

export interface ICar {
  engine: string;
  fullTraction: boolean;
}

const CARS: ICar[] = [
  {
    engine: 'V8',
    fullTraction: true
  },
  {
    engine: 'Electric',
    fullTraction: false
  },
  {
    engine: '6 cylinders, vertical',
    fullTraction: true
  },
  {
    engine: '4 cylinders, horizontal',
    fullTraction: false
  },
  {
    engine: 'W6',
    fullTraction: true
  }
];

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})
export class CarsComponent {
  cars: ICar[] = CARS;
  fullTraction = false;

  constructor() {
    this.reset();
  }

  addCar(engine: string) {
    engine = engine.trim();
    if (!engine) {
      return;
    }
    const car: ICar = {
      engine,
      fullTraction: this.fullTraction
    };
    const newCars = this.cars;
    newCars.push(car);
    this.cars = newCars;
  }

  reset() {
    this.cars = CARS.slice();
  }
}
