import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-result-xml',
  templateUrl: './result-xml.component.html',
  styleUrls: ['./result-xml.component.css'],
  imports:[CommonModule,FormsModule]
})
export class ResultXmlComponent implements OnInit {
  xmlFields: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const savedData = localStorage.getItem('xmlFields');
    if (savedData) {
      this.xmlFields = JSON.parse(savedData);
    }
  }

  exportToExcel() {
    window.open('http://localhost:8080/api/xml/export', '_blank');
  }
}
