// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { FileService } from '../service/file.service';

// @Component({
//   selector: 'app-file-preview',
//   templateUrl: './file-preview.component.html',
//   styleUrls: ['./file-preview.component.css'],
// })
// export class FilePreviewComponent implements OnInit {
//   fieldMappings: { [key: string]: string } = {};
//   fileName: string | null = '';

//   constructor(
//     private fileService: FileService,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     this.fileName = this.route.snapshot.queryParamMap.get('fileName');
//     this.fetchPreview();
//   }

//   fetchPreview(): void {
//     this.fileService.getPreview().subscribe({
//       next: (data) => (this.fieldMappings = data),
//       error: (err) => console.error('Error fetching preview:', err),
//     });
//   }
// }
