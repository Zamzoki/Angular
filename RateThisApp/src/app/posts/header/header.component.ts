import { Component } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
    selector: 'app-header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authenticationService: AuthenticationService) {
  }

  handleLogoutButtonClick() {
    this.authenticationService.logout();
  }

}
