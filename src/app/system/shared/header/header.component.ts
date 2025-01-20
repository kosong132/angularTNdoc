
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent {
  //userProfileImage: string = 'assets/images/default-profile-pic.png'; // Default profile picture
  userName: string = 'Yong Kok Siong'; // Default user name
  dropdownVisible: boolean = false; // Controls dropdown visibility
  searchTimeout: any; // Timeout for debouncing search input

  // Toggles the dropdown menu
  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
    console.log('Dropdown Visible:', this.dropdownVisible); // Log the state of the dropdown
  }
 // Function to handle search
 onSearch(query: string): void {
  console.log('Search query:', query);
  // Add search handling logic here, e.g., calling a search API or filtering data
}
  // Placeholder for notification handling
  handleNotifications(): void {
    console.log('Notification button clicked!');
  }
  @Output() sidebarToggle = new EventEmitter<void>();

  onToggleSidebar(): void {
    console.log('Sidebar toggle triggered from header.');
    this.sidebarToggle.emit(); // Notify parent to toggle the sidebar
  }
}
