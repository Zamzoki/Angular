import { Pipe, PipeTransform } from '@angular/core';
import { ICar} from './cars.component';

@Pipe({name: 'fullTraction', pure: false})
export class FullTractionPipe implements  PipeTransform {
  transform(allCars: ICar[]) {
    return allCars.filter(car => car.fullTraction);
  }
}
