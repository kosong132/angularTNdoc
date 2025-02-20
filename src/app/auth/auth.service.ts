import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://tndocmanager-1.onrender.com/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    console.log('Sending login request...');
    return this.http.post<any>(`${this.baseUrl}/login`, credentials).pipe(
      catchError((error) => {
        console.error('Login error:', error);
        console.error('Response Body:', error.error);
        return throwError(() => new Error('Login failed. Please try again.'));
      })
    );
  }
  // forgotPassword(email: string): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/forgot-password`, { email }).pipe(
  //     tap(() => console.log('Forgot password request successful.')), // Log success
  //     catchError((error) => {
  //       console.error('Forgot password error:', error);
  //       return throwError(() => new Error('Error during password reset. Please try again.'));
  //     })
  //   );
  // }
  forgotPassword(email: string): Observable<string> {
    return this.http.post(`${this.baseUrl}/forgot-password`, { email }, { responseType: 'text' }).pipe(
      tap((response) => console.log('Forgot password response:', response)),
      catchError((error) => {
        console.error('Forgot password error:', error);
        return throwError(() => new Error('Error during password reset. Please try again.'));
      })
    );
  }
  
  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      return decodedToken.exp > currentTime;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
  getUserProfile(): Observable<any> {
    return this.http.get('/api/user/profile'); // Replace with your actual endpoint
  }
  // resetPassword(token: string, newPassword: string) {
  //   const url = `http://localhost:8080/api/auth/reset-password/${token}`;
  //   return this.http.post(url, { "newPassword": newPassword }, { headers: { 'content-type': 'application/json' } });
  // }
  resetPassword(token: string, newPassword: string) {
    const url = `https://tndocmanager-1.onrender.com/api/auth/reset-password/${token}`;
    return this.http.post(url, { newPassword });
  }
  
}
