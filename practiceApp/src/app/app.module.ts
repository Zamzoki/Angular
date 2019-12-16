import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {
  ArrowFunctionsComponent,
  ClassesComponent,
  DesctructuringComponent,
  MapsComponent,
  MultiplyPipe,
  PipesComponent,
  ParametersComponent,
  ScopesAndLetComponent,
  SetsComponent,
  TemplateStringsComponent,
  WeakMapWeakSetComponent,
  MultiplyComponent,
  CarsComponent,
  FullTractionPipe,
  MessagesComponent
} from './samples';


@NgModule({
  declarations: [
    AppComponent,
    ArrowFunctionsComponent,
    ClassesComponent,
    DesctructuringComponent,
    MapsComponent,
    ParametersComponent,
    ScopesAndLetComponent,
    SetsComponent,
    TemplateStringsComponent,
    WeakMapWeakSetComponent,
    HomeComponent,
    PipesComponent,
    MultiplyComponent,
    MultiplyPipe,
    CarsComponent,
    FullTractionPipe,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'samples/arrowFunctions',
        component: ArrowFunctionsComponent
      },
      {
        path: 'samples/classes',
        component: ClassesComponent
      },
      {
        path: 'samples/destructuring',
        component: DesctructuringComponent
      },
      {
        path: 'samples/maps',
        component: MapsComponent
      },
      {
        path: 'samples/parameters',
        component: ParametersComponent
      },
      {
        path: 'samples/scopeAndLet',
        component: ScopesAndLetComponent
      },
      {
        path: 'samples/sets',
        component: SetsComponent
      },
      {
        path: 'samples/templateStrings',
        component: TemplateStringsComponent
      },
      {
        path: 'samples/weakMapWeakSet',
        component: WeakMapWeakSetComponent
      },
      {
        path: 'samples/pipes/multiply',
        component: MultiplyComponent
      },
      {
        path: 'samples/pipes/cars',
        component: CarsComponent
      },
      {
        path: 'samples/pipes/messages',
        component: MessagesComponent
      },
      {
        path: 'samples/pipes',
        component: PipesComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]),
  ],
  providers: [
    MultiplyPipe,
    FullTractionPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
