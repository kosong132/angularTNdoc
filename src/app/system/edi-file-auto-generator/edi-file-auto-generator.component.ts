import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EdiFileAutoGeneratorService } from './edi-file-auto-generator.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edi-file-auto-generator',
  templateUrl: './edi-file-auto-generator.component.html',
  styleUrls: ['./edi-file-auto-generator.component.css'],
  standalone: true,
  imports:[CommonModule,FormsModule]
})
export class EdiFileAutoGeneratorComponent {
  selectedFile: File | null = null;

  constructor(
    private ediService: EdiFileAutoGeneratorService,
    private router: Router
  ) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('File selected:', this.selectedFile.name);
    } else {
      this.selectedFile = null;
      console.warn('No file selected.');
    }
  }

  onSubmit(e: any): void {
    e.preventDefault();
    if (!this.selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    console.log('Submitting file:', this.selectedFile.name);
    this.ediService.uploadFile(this.selectedFile).subscribe({
      next: (response) => {
        console.log(response);
        if (response && Array.isArray(response)) {
          console.log('File uploaded successfully. Redirecting...', response);
          // Navigate with response data
          this.router.navigate(['/system/edi-file-list'], { state: { ediDataList: response } });
        } else {
          console.error('Unexpected response:', response);
          alert('Unexpected response from server. Please contact support.');
        }
      },
      error: (error) => {
        console.error('Error uploading file:', error);
        alert('Failed to upload the file. Please try again.');
      },
    });
  }
}
