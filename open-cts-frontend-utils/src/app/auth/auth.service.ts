import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl = 'http://localhost:4000/';

  constructor(
    private http: HttpClient
  ) { }

  upload(file) {
    return this.http.post(this.baseurl + 'auth/upload/c', file);
  }

}
