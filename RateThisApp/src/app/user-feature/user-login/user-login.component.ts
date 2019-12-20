import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {IUser, AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  canLogin = true;
  email: FormControl;
  password: FormControl;
  loginForm: FormGroup;

  constructor(private router: Router, private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.email = new FormControl();
    this.password = new FormControl();

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  handleLoginButtonClick() {
    const user: IUser = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    if (this.authenticationService.login(user)) {
      this.router.navigate(['/post']);
    } else {
      this.canLogin = false;
    }

  }
}
