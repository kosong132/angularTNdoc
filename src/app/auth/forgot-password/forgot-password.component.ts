import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  email: string = '';
  emailError: string | null = null;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {
    console.log('ForgotPasswordComponent loaded');
  }

  onSubmit() {
    this.emailError = this.email ? null : 'Please enter a valid email address.';
    
    if (this.emailError) {
      return;
    }

    this.authService.forgotPassword(this.email).subscribe({
      next: (response: string) => {
        console.log('Password reset success:', response);
        this.successMessage = response;
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      },
      error: (err) => {
        console.error('Error during password reset:', err);
        this.errorMessage = 'There was an issue with the password reset request. Please try again.';
      },
    });
  }

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
