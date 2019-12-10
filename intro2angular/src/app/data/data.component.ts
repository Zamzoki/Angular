import { Component, OnInit } from '@angular/core';
import {RecordsService} from '../records.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data = [];

  constructor(private myRecordsService : RecordsService) {
  
  }

  ngOnInit() {
    this.myRecordsService.fetchData().subscribe(response => {
      this.myRecordsService.setData(response);
      this.data = this.myRecordsService.getData();
      console.log(response.data);
    });
  }

}
