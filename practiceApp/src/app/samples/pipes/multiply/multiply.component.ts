import { Component } from '@angular/core';

@Component({
    selector: 'app-multiply',
    templateUrl: './multiply.component.html',
    styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent {

    value: number;
    factor: number;

    constructor() {
    }
}
