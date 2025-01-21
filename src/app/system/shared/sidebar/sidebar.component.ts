import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SidebarComponent {
  isSidebarVisible: boolean = true;

  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
    console.log('Sidebar state:', this.isSidebarVisible);
  }
}
