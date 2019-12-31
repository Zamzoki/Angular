import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthRouteActivator implements  CanActivate {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {

  }

  canActivate() {
    const isLoggedIn = !!this.authenticationService.currentUser;

    console.log(isLoggedIn);

    if (!isLoggedIn) {
      this.router.navigate(['user/login']);
    }

    return isLoggedIn;
  }
}
