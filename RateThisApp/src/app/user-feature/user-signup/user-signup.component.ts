import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService, IUser} from '../../services/authentication.service';
import {Router} from '@angular/router';

const nameRegex = /^[ a-zA-Z]*$/;
// tslint:disable-next-line:max-line-length
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  signupForm: FormGroup;



  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.name = new FormControl('', [Validators.required, this.nameFormatValidator]);
    this.email = new FormControl('', [Validators.required, this.emailFormatValidator]);
    this.password = new FormControl('', Validators.required);
    this.confirmPassword = new FormControl('', [Validators.required]);

    this.signupForm = new FormGroup({
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

  nameFormatValidator(control: FormControl): {[key: string]: any} {
    return !nameRegex.test(control.value) ? { wrongFormat: 'only letters allowed'} : null;
  }

  emailFormatValidator(control: FormControl): {[key: string]: any} {
    return !(emailRegex.test(control.value) || /^[ ]*$/.test(control.value)) ? { wrongFormat: 'format as example@email.com'} : null;
  }

  passwordsMatch(password: string, cPassword: string) {
    return password === cPassword;
  }

  handleSignupButtonClick() {
    const user: IUser = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    };

    this.authService.signup(user);
    this.router.navigate(['user/login']);
  }
}
