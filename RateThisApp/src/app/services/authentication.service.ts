import { Injectable } from '@angular/core';

export interface IUser {
  name?: string;
  email: string;
  password: string;
}

@Injectable()
export class AuthenticationService {
  users: IUser[] = [];
  currentUser: IUser;
  // tslint:disable-next-line:variable-name
  _isAuthenticated = false;

  constructor() {
    const usersJson = JSON.parse(localStorage.getItem('users'));

    if (usersJson) {
      for (const user of usersJson) {
        this.users.push(user as IUser);
      }
    }

    this.login(this.users[0]);
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }

  login(user: IUser): boolean {


    const loggedUser = this.users.find(usr => usr.email === user.email && usr.password === user.password);

    if (!!loggedUser) {
      this.isAuthenticated = true;
      this.currentUser = loggedUser;
      return true;
    }

    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.currentUser = null;
  }

  signup(user: IUser) {
    this.users.push(user);
    localStorage.setItem(`users`, JSON.stringify(this.users));
  }
}
