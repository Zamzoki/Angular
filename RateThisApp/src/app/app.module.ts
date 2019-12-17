import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './appRoutes';

import {
  PostComponent,
  DashboardComponent,
  HomeComponent,
  PostOverviewComponent,
  HeaderComponent,
  NewPostComponent,
  ErrorComponent
} from './posts/index';

import {
  PostServices,
  RouteActivatorService,
  RouteDeactivatorService,
  PostListResolver,
  PostOverviewResolver
} from './services/index';

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
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  providers: [
    PostServices,
    RouteActivatorService,
    RouteDeactivatorService,
    PostListResolver,
    PostOverviewResolver
  ],
  bootstrap: [ HomeComponent ]
})
export class AppModule { }
