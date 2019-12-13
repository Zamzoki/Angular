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
  MultiplyComponent,
  ParametersComponent,
  ScopesAndLetComponent,
  SetsComponent,
  TemplateStringsComponent,
  WeakMapWeakSetComponent
} from './samples/index';


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
    MultiplyComponent,
    MultiplyPipe
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
        component:WeakMapWeakSetComponent
      },
      {
        path: 'samples/pipes',
        component: MultiplyComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ]),
  ],
  providers: [
    MultiplyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
