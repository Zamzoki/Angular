import { Component } from '@angular/core';
import { RecordsService } from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [];

  constructor(private myRecordsService : RecordsService) {
    myRecordsService.getData().subscribe(response => {
      console.log(response.data);
      this.data = response.data;
    });
  }
};
