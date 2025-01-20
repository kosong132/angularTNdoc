import { Component } from '@angular/core';
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { HeaderComponent } from "./shared/header/header.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css'],
  standalone:true,
  imports: [SidebarComponent, HeaderComponent,RouterModule,CommonModule]
})
export class SystemComponent {
    sidebarVisible: boolean = true; // Track sidebar visibility

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
    console.log('Sidebar visibility:', this.sidebarVisible);
  }
    
}
