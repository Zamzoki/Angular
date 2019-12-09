import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {
  isDisabled = false;

  constructor(private myRecordsService : RecordsService) { }

  ngOnInit() {
  }

  updateData() {
    this.myRecordsService.updateData();
  }

  disableButton() {
    this.isDisabled = true;
  }
}
