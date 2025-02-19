import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './file-compare-display.component.html',
  styleUrls: ['./file-compare-display.component.css'],
  imports:[CommonModule,FormsModule]
})
export class FileCompareDisplayComponent  {
  mergedData: Array<{ tag: string; cusdecData: string; cusresData: string }> = []; 
  error: string | null = null;

  constructor(private router:Router) {  
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { mergedData: Array<{ tag: string; cusdecData: string; cusresData: string }> };
    console.log('Navigation State:', navigation);

    if (state?.mergedData) {
      this.mergedData = state.mergedData;
      console.log('Merged Data:', this.mergedData);
    } else {
      console.warn('No merged data found. Please upload files first.');
    }
  }}

