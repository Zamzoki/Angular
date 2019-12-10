import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrowFunctionsComponent } from './samples/arrow-functions/arrow-functions.component';
import { ClassesComponent } from './samples/classes/classes.component';
import { DesctructuringComponent } from './samples/desctructuring/desctructuring.component';
import { MapsComponent } from './samples/maps/maps.component';
import { ParametersComponent } from './samples/parameters/parameters.component';
import { ScopesAndLetComponent } from './samples/scopes-and-let/scopes-and-let.component';
import { SetsComponent } from './samples/sets/sets.component';
import { TemplateStringsComponent } from './samples/template-strings/template-strings.component';
import { WeakMapWeakSetComponent } from './samples/weak-map-weak-set/weak-map-weak-set.component';
import { HomeComponent } from './home/home.component';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
        path: '',
        component: HomeComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
