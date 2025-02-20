import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileSortingService {
  // private apiUrl = 'http://localhost:8080/upload/files'; // Replace with your backend URL
  private apiUrl = 'http://tndocmanager-1.onrender.com/upload/files'; 

  constructor(private http: HttpClient) {}

  uploadFiles(files: File[]): Observable<Blob> {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append('files', file, file.name);
    });

    return this.http.post(this.apiUrl, formData, { responseType: 'blob' });
  }
}
