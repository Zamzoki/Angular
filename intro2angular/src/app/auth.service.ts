import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // default is false
  // if it's true, we're sure we're logged int
  // if it's false, we might be logged in but refreshed the page; or we may not be logged in at all
  private loggedInStatus = false;

  constructor(private http : HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(username, password) {
    return this.http.post<Response>('/api/auth.php', {
      username,
      password
    });
  }
}
