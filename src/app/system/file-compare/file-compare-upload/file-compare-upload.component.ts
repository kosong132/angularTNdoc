import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edicompare',
  templateUrl: './file-compare-upload.component.html',
  styleUrls: ['./file-compare-upload.component.css'],
  imports:[CommonModule,FormsModule]
})
export class FilecompareComponent {
  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Handles file upload and submission to the server.
   * @param cusdecFiles - FileList containing the selected CUSDEC file.
   * @param cusresFiles - FileList containing the selected CUSRES file.
   */
  onSubmit(cusdecFiles: FileList | null, cusresFiles: FileList | null): void {
    const cusdecFile = cusdecFiles?.item(0); // Get the first file from the FileList
    const cusresFile = cusresFiles?.item(0); // Get the first file from the FileList

    if (!cusdecFile || !cusresFile) {
      alert('Both files are required.');
      return;
    }

    const formData = new FormData();
    formData.append('cusdecFile', cusdecFile);
    formData.append('cusresFile', cusresFile);

    this.http.post('http://localhost:8080/api/files/preview', formData).subscribe({
      next: (response:any) => {
        console.log('Files uploaded successfully. Redirecting...');
        this.router.navigate(['/system/file-compare-display'],{ state: { mergedData: response }, });
      },
      error: (err) => {
        console.error('File upload failed:', err);
        alert('Failed to upload files. Please try again.');
      },
    });
  }
}