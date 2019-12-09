import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  data = [];

  constructor() { 
    this.data = [
      {
        name: "Dave",
        online: true
      },
      {
        name: "Andy",
        online: false
      },
      {
        name: "Chris",
        online: true
      },
      {
        name: "Dave",
        online: true
      },
      {
        name: "Andy",
        online: false
      },
      {
        name: "Chris",
        online: true
      },
      {
        name: "Dave",
        online: true
      },
      {
        name: "Andy",
        online: false
      },
      {
        name: "Chris",
        online: true
      },
    ];
  }

  getData() {
    return this.data;
  }

  updateData() {
    this.data.forEach(dataEntry => {
      dataEntry.name = dataEntry.name + " SkaP";
    });
  }
}
