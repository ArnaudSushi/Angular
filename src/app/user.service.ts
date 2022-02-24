import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public findById(id: string): Observable<User> {
    var userUrl = this.usersUrl + "/" + id;
    return this.http.get<User>(userUrl);
  }

  public add(user: User) {
    return this.http.post<User>(this.usersUrl, user, { responseType: 'text' as 'json'});
  }

  public modify(user: User) {
    return this.http.put<User>(this.usersUrl, user);
  }

  public delete(id: string) {
    var deleteUrl = this.usersUrl + "/" + id;
    return this.http.delete<User>(deleteUrl);
  }
}
