import { Routes } from '@angular/router';
import { PostOverview } from './post-overview/post-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewPostComponent } from './new-post/new-post.component';

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
        path: 'post/:id', 
        component: PostOverview
    },
    {
        path: '',
        redirectTo: 'post',
        pathMatch: 'full'
    }
]