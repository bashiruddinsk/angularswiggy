import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

 
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (this.userService.validateUser(username, password)) {
        this.router.navigate(['/home']); // Navigate to home if login is successful
      } else {
        this.errorMessage = "Invalid credentials or user not registered. Please register.";
      }
    }
  }

  onRegister(): void {
    this.router.navigate(['/login/register']); // Navigate to register page
  }
}
