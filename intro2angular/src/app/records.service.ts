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

  getData() {
    return  this.http.get<myData>('/api/data.php');
  }

  updateData() {
    this.data.forEach(dataEntry => {
      dataEntry.name = dataEntry.name + ' SkaP';
    });
  }
}
