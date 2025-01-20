import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Import your AuthService
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported for ngModel
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule,FormsModule], // Import FormsModule for ngModel binding
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  email: string = ''; // Declare email property to bind the input field
  errorMessage: string = ''; // Store error message
  successMessage: string = ''; // Store success message

  constructor(private authService: AuthService,private router: Router) { console.log('ForgotPasswordComponent loaded');}

  // onSubmit method to handle form submission
  onSubmit() {
    if (this.email) {
      this.authService.forgotPassword(this.email).subscribe({
        next: (response: string) => {
          console.log('Password reset success:', response);
          this.successMessage = response; // Display the plain text message
          setTimeout(() => {
            window.location.reload(); // Reload the page after 5 seconds
          }, 5000);
        },
        error: (err) => {
          console.error('Error during password reset:', err);
          this.errorMessage = 'There was an issue with the password reset request. Please try again.';
        },
      });
    } else {
      console.log('Please enter a valid email');
      this.errorMessage = 'Please enter a valid email address.';
    }
  }
   // onSubmit() {
  //   if (this.email) {
  //     this.authService.forgotPassword(this.email).subscribe({
  //       next: (response) => {
  //         console.log('Password reset success', response);
  //         this.successMessage = 'A password reset link has been sent to your email. Please check your inbox.';
  //         setTimeout(() => {
  //           window.location.reload(); // Reload the page after 5 seconds
  //         }, 5000);
  //       },
  //       error: (err) => {
  //         console.error('Error during password reset:', err);
  //         this.errorMessage = 'There was an issue with the password reset request. Please try again.';
  //       },
  //     });
  //   } else {
  //     console.log('Please enter a valid email');
  //     this.errorMessage = 'Please enter a valid email address.';
  //   }
  // }
   // onSubmit() {
  //   if (this.email) {
  //     this.authService.forgotPassword(this.email).subscribe({
  //       next: (response) => {
  //         console.log('Password reset success', response);
  //         this.successMessage = 'A password reset link has been sent to your email.';
  //       },
  //       error: (err) => {
  //         console.error('Error during password reset:', err);
  //         this.errorMessage = 'There was an issue with the password reset request. Please try again.';
  //       },
  //     });
  //   } else {
  //     console.log('Please enter a valid email');
  //     this.errorMessage = 'Please enter a valid email address.';
  //   }
  // }
  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
