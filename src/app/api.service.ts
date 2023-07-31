import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private registerUrl =
    'https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d';

  private formUrl = 'https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2';

  private isAuthenticated: boolean = false;

  constructor(private http: HttpClient) {}

  registerUser(): Observable<any> {
    return this.http.get(this.registerUrl).pipe(
      tap(() => {
        console.log('User Registration Successful');
      })
    );
  }

  getUserProfile(): Observable<any> {
    return this.http.get(this.formUrl).pipe(
      map((res) => {
        return res;
      })
    );
  }

  setAuthenticatedStatus(status: boolean) {
    this.isAuthenticated = status;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
