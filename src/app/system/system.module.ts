import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRoutingModule } from './system-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FileSortingComponent } from './file-sorting/file-sorting.component'; // Import standalone component

@NgModule({
  imports: [
    CommonModule,         // Import CommonModule
    SystemRoutingModule,  // Import SystemRoutingModule
    HttpClientModule,     // Import HttpClientModule for API calls
    FormsModule,          // Import FormsModule if required
    FileSortingComponent, // Add standalone component to imports
  ],
})
export class SystemModule {}
