// import { Component } from '@angular/core';
// import { FileService } from '../service/file.service';

// @Component({
//   selector: 'app-file-upload',
//   templateUrl: './file-upload.component.html',
//   styleUrls: ['./file-upload.component.css'],
// })
// export class FileUploadComponent {
//   selectedFile: File | null = null;
//   fileData: { [key: string]: string } = {};

//   constructor(private fileService: FileService) {}

//   onFileSelected(event: any): void {
//     const file = event.target.files[0];
//     if (file) {
//       this.selectedFile = file;
//       alert('File selected successfully.');
//     }
//   }

//   uploadFile(): void {
//     if (this.selectedFile) {
//       this.fileService.uploadFile(this.selectedFile).subscribe({
//         next: (data: { [key: string]: string }) => {
//           this.fileData = data;
//           alert('File uploaded and data fetched successfully.');
//         },
//         error: (err) => {
//           console.error('Error uploading file:', err);
//           alert('Failed to upload file.');
//         },
//       });
//     }
//   }
// }
