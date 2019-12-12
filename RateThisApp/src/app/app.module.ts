import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PostServices } from './services/post.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './appRoutes';
import { PostOverview } from './post-overview/post-overview.component';
import { HeaderComponent } from './header/header.component';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    PostComponent,
    DashboardComponent,
    PostOverview, 
    HomeComponent,
    HeaderComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ PostServices ],
  bootstrap: [ HomeComponent ]
})
export class AppModule { }
