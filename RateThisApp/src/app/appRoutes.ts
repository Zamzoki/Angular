import { Routes } from '@angular/router';
import { PostOverview } from './post-overview/post-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ErrorComponent } from './error/error.component';
import { RouteActivatorService } from './services/routeActivator.service';

export const appRoutes: Routes = [
    {
        path: 'post',
        component: DashboardComponent  
    },
    {
        path: 'post/new',
        component: NewPostComponent
    },
    {
        path: 'post/error',
        component: ErrorComponent
    },
    {
        path: 'post/:id', 
        component: PostOverview,
        canActivate: [ RouteActivatorService ]
    },
    {
        path: '',
        redirectTo: 'post',
        pathMatch: 'full'
    }
]