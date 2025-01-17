import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edicompare',
  templateUrl: './edicompare.component.html',
  styleUrls: ['./edicompare.component.css']
})
export class EdicompareComponent {
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(cusdecFile: File, cusresFile: File): void {
    const formData = new FormData();
    formData.append('cusdecFile', cusdecFile);
    formData.append('cusresFile', cusresFile);

    this.http.post('http://localhost:8080/preview', formData)
      .subscribe({
        next: () => this.router.navigate(['/preview']),
        error: (err) => console.error('File upload failed:', err.message)
      });
  }
}
