import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './appRoutes';

import {
  PostComponent,
  DashboardComponent,
  HomeComponent,
  PostOverviewComponent,
  HeaderComponent,
  NewPostComponent,
  ErrorComponent,
} from './posts';

import {
  PostServices,
  RouteActivatorService,
  RouteDeactivatorService,
  PostListResolver,
  PostOverviewResolver
} from './services';

import {AuthenticationService} from './services/authentication.service';

@NgModule({
  declarations: [
    PostComponent,
    DashboardComponent,
    PostOverviewComponent,
    HomeComponent,
    HeaderComponent,
    NewPostComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    PostServices,
    RouteActivatorService,
    RouteDeactivatorService,
    PostListResolver,
    PostOverviewResolver,
    AuthenticationService,
  ],
  bootstrap: [ HomeComponent ]
})
export class AppModule { }
