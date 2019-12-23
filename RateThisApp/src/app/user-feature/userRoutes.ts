import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserSignupComponent} from './user-signup/user-signup.component';

export const userRoutes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent
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
