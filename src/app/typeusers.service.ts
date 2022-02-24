import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Typeusers } from './typeusers';

@Injectable({
  providedIn: 'root'
})
export class TypeusersService {

  private typeUsersUrl: string;

  constructor(private http: HttpClient) {
    this.typeUsersUrl = 'http://localhost:8080/typeusers'
  }

  public findAll(): Observable<Typeusers[]> {
    return this.http.get<Typeusers[]>(this.typeUsersUrl);
  }

  public findById(id: string): Observable<Typeusers> {
    var typeUrl = this.typeUsersUrl + "/" + id;
    return this.http.get<Typeusers>(typeUrl);
  }

  public add(user: Typeusers) {
    return this.http.post<Typeusers>(this.typeUsersUrl, user, { responseType: 'text' as 'json' });
  }

  public delete(id: string) {
    var deleteUrl = this.typeUsersUrl + "/" + id;
    return this.http.delete<Number>(deleteUrl);
  }
}
