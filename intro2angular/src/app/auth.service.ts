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
  
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http : HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  // it's a getter; I can access it as a property
  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  getUserDetails(username, password) {
    // post these details to API server and return user info if correct
    return this.http.post<Response>('/api/auth.php', {
      username,
      password
    });
  }
}
