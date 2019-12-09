import { Component } from '@angular/core';
import { RecordsService } from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [];

  constructor(private myFirstService : RecordsService) {

  }

  ngOnInit() {
    this.data = this.myFirstService.getData();
  }
};
