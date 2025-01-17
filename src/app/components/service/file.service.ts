// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class FileService {
//   private apiUrl = 'http://localhost:8080/api/files'; // Backend URL

//   constructor(private http: HttpClient) {}

//   uploadFile(file: File): Observable<any> {
//     const formData = new FormData();
//     formData.append('file', file);
//     return this.http.post(`${this.apiUrl}/upload`, formData);
//   }

//   getPreview(): Observable<{ [key: string]: string }> {
//     return this.http.post<{ [key: string]: string }>(`${this.apiUrl}/upload`, {});
//   }
// }
