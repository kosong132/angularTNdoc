import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service'; // Import your AuthService
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  standalone: true,
  imports: [CommonModule,FormsModule],

})
export class ResetPasswordComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  token: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  newpasswordError: string | null = null;
  confirmedpasswordError: string | null = null;

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {
    this.token = this.route.snapshot.paramMap.get('token') || '';
    console.log('Token:', this.token);
  }
  onSubmit() {
    this.newpasswordError = this.newPassword ? null : 'New Password is required';
    this.confirmedpasswordError = this.confirmPassword ? null : 'Confirmed Password is required';
    
    if (this.newpasswordError || this.confirmedpasswordError) {
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }
  //   console.log('Password reset success:', response);
  //   this.successMessage = response; // Display the plain text message
  //   setTimeout(() => {
  //     window.location.reload(); // Reload the page after 5 seconds
  //   }, 5000);
  // },
    this.authService.resetPassword(this.token, this.newPassword).subscribe({
      next: (response) => {
        this.successMessage = 'Password has been reset successfully!';
        setTimeout(() => {
          this.router.navigate(['/auth/login']);// Reload the page after 5 seconds
        }, 5000);
        
      },
      error: (err) => {
        this.errorMessage = 'Failed to reset password. Ivalid token';
        console.error(err);
      },
    });
    

  }
  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }
  
}
