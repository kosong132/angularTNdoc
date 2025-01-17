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

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {
    this.token = this.route.snapshot.paramMap.get('token') || '';
    console.log('Token:', this.token);
  }

  onSubmit() {
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }
  
    console.log('Token:', this.token); // Log token
    console.log('New Password:', this.newPassword); // Log new password
  
    this.authService.resetPassword(this.token, this.newPassword).subscribe({
      next: (response) => {
        this.successMessage = response['message']|| 'Password has been reset successfully!';
        this.errorMessage = ''; // Clear any existing error messages
        console.log('Password reset success:', response);
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Failed to reset password. Please try again.';
        console.error('Password reset error:', err);
      },
    });
    
  }
  
}
