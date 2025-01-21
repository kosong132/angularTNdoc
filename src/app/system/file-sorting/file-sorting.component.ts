import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FileSortingService } from './file-sorting.service';


@Component({
  selector: 'app-file-sorting',
  templateUrl: './file-sorting.component.html',
  styleUrls: ['./file-sorting.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class FileSortingComponent {
  files: File[] = [];

  constructor(private fileSortingService: FileSortingService) {}

  onFileSelect(event: any): void {
    this.files = Array.from(event.target.files);
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.files.length > 0) {
      this.fileSortingService.uploadFiles(this.files).subscribe(
        (response: Blob) => {
          // Create a link to download the zip file
          const blobUrl = window.URL.createObjectURL(response);
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = 'all_abv_files.zip';
          link.click();
        },
        (error) => {
          console.error('Upload failed:', error);
        }
      );
    }
  }
}
