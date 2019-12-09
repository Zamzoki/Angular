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
  
  }

  ngOnInit() {
    this.myRecordsService.getData().subscribe(response => {
      this.data = response.data;
      console.log(response.data);
    });
  }
}