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
    this.myRecordsService.getData().subscribe(response => {
      this.data = response.data;
      console.log(response.data);
    });
  }

}
