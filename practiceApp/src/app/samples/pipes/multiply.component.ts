import { Component } from '@angular/core';

@Component({
    selector: 'app-multiply',
    templateUrl: './multiply.component.html'
})
export class MultiplyComponent {

    constructor(private value: number, private factor: number) {
        this.value = 1;
        this.factor = 1;
    }
}