import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'multiply'})
export class MultiplyPipe implements PipeTransform {
    transform(value: number, factor: number): number {
        value = isNaN(value) ? 1 : value;
        factor = isNaN(factor) ? 1 : factor;

        return value * factor;
    }
}
