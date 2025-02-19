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
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  usernameError: string | null = null;
  passwordError: string | null = null;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.usernameError = this.username ? null : 'Username is required';
    this.passwordError = this.password ? null : 'Password is required';
    
    if (this.usernameError || this.passwordError) {
      return;
    }

    const credentials = { username: this.username, password: this.password };
    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.errorMessage = null;
        this.router.navigate(['/system/edi-generator']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.errorMessage = 'Invalid username or password!';
      },
    });
  }

  navigateToForgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }
}
