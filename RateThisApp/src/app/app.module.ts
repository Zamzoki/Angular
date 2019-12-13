import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PostServices } from './services/post.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './appRoutes';
import { PostOverviewComponent } from './post-overview/post-overview.component';
import { HeaderComponent } from './header/header.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ErrorComponent } from './error/error.component';
import { RouteActivatorService } from './services/routeActivator.service';
import { RouteDeactivatorService } from './services/routeDeactivator.service';
import { PostListResolver } from './services/postListResolver.service';
import { PostOverviewResolver } from './services/postOverviewResolver.service';

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
