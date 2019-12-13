import { Routes } from '@angular/router';

import {
    DashboardComponent,
    NewPostComponent,
    ErrorComponent,
    PostOverviewComponent
} from './posts/index';

import {
    PostListResolver,
    RouteActivatorService,
    RouteDeactivatorService,
    PostOverviewResolver
} from './services/index';

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