import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserSignupComponent} from './user-signup/user-signup.component';
import {AuthRouteActivator} from '../services';

export const userRoutes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthRouteActivator]
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'signup',
    component: UserSignupComponent
  },
  {
    path: '**',
    redirectTo: 'post/error'
  }
];
