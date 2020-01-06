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
  PostImageComponent,
  SimpleModalComponent
} from './posts';

import {
  PostServices,
  RouteActivatorService,
  RouteDeactivatorService,
  PostListResolver,
  PostOverviewResolver,
  AuthenticationService,
  JQ_TOKEN,
  VoteService
} from './services';
import {ModalTriggerDirective} from './directives/modal-trigger.directive';
import {CloseModalDirective} from './directives/close-modal.directive';
import {AuthRouteActivator} from './services';

declare let jQuery: object;

@NgModule({
  declarations: [
    PostComponent,
    DashboardComponent,
    PostOverviewComponent,
    HomeComponent,
    HeaderComponent,
    NewPostComponent,
    ErrorComponent,
    PostImageComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    CloseModalDirective
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
    { provide: JQ_TOKEN, useValue: jQuery},
    AuthRouteActivator,
    VoteService
  ],
  bootstrap: [ HomeComponent ]
})
export class AppModule { }
