import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edi-file-auto-generator',
  templateUrl: './edi-file-auto-generator.component.html',
  styleUrls: ['./edi-file-auto-generator.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})

export class EdiFileAutoGeneratorComponent {
  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    } else {
      this.selectedFile = null;
    }
  }

  onSubmit(): void {
    if (!this.selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('File uploaded successfully:', data);
        alert('File uploaded and processed successfully.');
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
        alert('Failed to upload the file.');
      });
  }
}
