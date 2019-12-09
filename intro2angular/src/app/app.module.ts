import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UpdateDataComponent } from './update-data/update-data.component';

import { RecordsService } from './records.service';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UpdateDataComponent,
    HomeComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'data', // localhost:4200/data
        component: DataComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
    
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
