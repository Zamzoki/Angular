import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interface by which I specify the type of respone I expect to get at http.get
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
    return  this.http.get<myData>('http://localhost:1234/data.php');
  }

  updateData() {
    this.data.forEach(dataEntry => {
      dataEntry.name = dataEntry.name + ' SkaP';
    });
  }
}
