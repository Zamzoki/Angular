import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const car = new Car();
    console.log('Default parameters car:');
    car.setDetails();

    console.log('No accessories car:');
    car.setDetails('Mazda', 'rx7', 2012);

    console.log('Car with accessories, testing rest parameter:');
    car.setDetails('Toyota', 'Supra', 2019, 'leather seats', 'radio', 'AC', 'GD');
  }

}

class Car {
  make: string;
  model: string;
  year: number;

  constructor() {
  }

  currentYear() {
    return new Date().getFullYear();
  }

  setDetails(make = 'No make', model = 'No model', year = this.currentYear(), ...accessories) {
    this.make = make;
    this.model = model;
    this.year = year;

    console.log(`make: ${make}, model: ${model}, year: ${year}`);
    if (accessories) {
      accessories.forEach(accessory => console.log(accessory));
    }
  }
}
