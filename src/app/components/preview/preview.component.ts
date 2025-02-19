// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-preview',
//   templateUrl: './preview.component.html',
//   styleUrls: ['./preview.component.css']
// })
// export class PreviewComponent implements OnInit {
//   tagDataList: any[] = [];
//   error: string | null = null;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.http.get('http://localhost:8080/preview-data')
//       .subscribe({
//         next: (data: any) => this.tagDataList = data,
//         error: (err) => this.error = 'Failed to load preview data: ' + err.message
//       });
//   }
// }
