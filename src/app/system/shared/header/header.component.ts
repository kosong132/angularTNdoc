
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent {
  //userProfileImage: string = 'assets/images/default-profile-pic.png'; // Default profile picture
  username: string = '';
  dropdownVisible: boolean = false; // Controls dropdown visibility
  searchTimeout: any; // Timeout for debouncing search input
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.getUserProfile(); // Fetch the user profile when the component initializes
  }
  getUserProfile(): void {
    this.authService.getUserProfile().subscribe(
      (response) => {
        this.username = response.username; // Set the username from the response
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );}
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
  showAlert(type: string): void {
    if (type === 'profile') {
      alert('This feature is under development.');
    } else if (type === 'announcements') {
      alert('This feature is under development.');
    }
  }
  logout(): void {
    this.authService.logout(); // Log out the user
    this.router.navigate(['/auth/login']); // Redirect to the login page
  }


}
