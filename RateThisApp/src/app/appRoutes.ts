import { Routes } from '@angular/router';
import { PostListResolver } from './services/postListResolver.service';
import { DashboardComponent } from './posts/dashboard/dashboard.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { ErrorComponent } from './posts/error/error.component';
import { RouteActivatorService } from './services/routeActivator.service';
import { RouteDeactivatorService } from './services/routeDeactivator.service';
import { PostOverviewComponent } from './posts/post-overview/post-overview.component';
import { PostOverviewResolver } from './services/postOverviewResolver.service';

export const appRoutes: Routes = [
    {
        path: 'post/new',
        component: NewPostComponent,
        canDeactivate: [ RouteDeactivatorService ]
    },
    {
        path: 'post/error',
        component: ErrorComponent
    },
    {
        path: 'post',
        component: DashboardComponent ,
        resolve: { posts: PostListResolver }
    },
    {
        path: 'post/:id', 
        component: PostOverviewComponent,
        canActivate: [ RouteActivatorService ],
        resolve: { post: PostOverviewResolver }
    },
    {
        path: '',
        redirectTo: 'post',
        pathMatch: 'full'
    },
    {
        path: 'user',
        loadChildren: './user-feature/user.module#UserModule'
    }
]