import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EdiFileAutoGeneratorService {
  private apiUrl = 'http://localhost:8080/api/edi-generator/upload'; // Backend endpoint

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    console.log('FormData created for file:', file.name);

    return this.http.post(this.apiUrl, formData).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('File upload failed:', error.message);
        return throwError(() => new Error('File upload failed.'));
      })
    );
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Backend returned an error:', error);
    return throwError(() => new Error('File upload failed. Please try again.'));
  }
}
