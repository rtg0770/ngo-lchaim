import { Injectable } from '@angular/core';
import { Authenticate, User } from '@lchaim/data-models';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject$.asObservable();
  constructor(private httpClient: HttpClient) {}
  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient
      .post<User>('http://localhost:3000/api/login', authenticate)
      .pipe(tap((user: User) => this.userSubject$.next(user)));
  }
}
