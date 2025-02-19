import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-xml',
  templateUrl: './upload-xml.component.html',
  styleUrls: ['./upload-xml.component.css'],
  imports: [CommonModule,FormsModule]
})
export class UploadXmlComponent {
  file: File | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

 uploadFile() {
  if (!this.file) {
    console.error('No file selected.');
    alert('Please select a file to upload.');
    return;
  }

  const formData = new FormData();
  formData.append('file', this.file);

  console.log('Uploading file:', this.file);
  console.log('FormData contents:', formData.get('file'));

  this.http.post('http://localhost:8080/api/xml/upload', formData)
    .subscribe({
      next: (response: any) => {
        console.log('File uploaded successfully:', response);
        localStorage.setItem('xmlFields', JSON.stringify(response));
        this.router.navigate(['/system/result-xml']);
      },
      error: (error) => {
        console.error('File upload failed:', error);
        alert('An error occurred while uploading the file.');
      }
    });
}

  
}
