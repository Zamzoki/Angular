import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  data: Array<object>
}

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  data = [];

  constructor(private http: HttpClient) { 
    
  }

  // To config proxy, edit "start" in package.json to
  // "start": "ng serve --proxy-config proxyconfig"
  // and change url below to /api/data.php
  getData() {
    return  this.http.get<myData>('http://localhost:1234/api/data.php');
  }

  updateData() {
    this.data.forEach(dataEntry => {
      dataEntry.name = dataEntry.name + ' SkaP';
    });
  }
}
