import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './userRoutes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserSignupComponent} from './user-signup/user-signup.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserLoginComponent,
    UserSignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule
  ],
  providers: [
  ]
})
export class UserModule {}
