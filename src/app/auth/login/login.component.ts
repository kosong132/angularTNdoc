import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule], // Include CommonModule for *ngIf
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;


  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Username and Password are required!';
    } else {
      const credentials = { username: this.username, password: this.password };
      this.authService.login(credentials).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this.errorMessage = null; // Clear any existing error message
          this.router.navigate(['/system/edi-generator']); // Redirect to the system page
        },
        error: (err) => {
          console.error('Login failed:', err);
          this.errorMessage = 'Invalid username or password!';
        },
      });
    }
  }
  navigateToForgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }
}
