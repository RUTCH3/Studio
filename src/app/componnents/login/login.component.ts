import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import { CommonModule, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule, MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public router: Router, public userService: UsersService, public authService: AuthService) { }
  userName: string = "";
  password: string = "";
  errorMessage = '';

  currentUser: User = { id: "", userName: "", phone: "", email: "", role: "", password: "" };

  login() {
    let user = this.userService.get(this.userName, this.password);
    if (!user?.id) {
      console.log('No User: ', user);
    }
    console.log('User is: ', user?.userName);
    if (user?.role == "T") {
      this.authService.login("teacher")
      this.router.navigate(['./teacher']);
    } else if (user?.role == 'S') {
      this.authService.login("secretry")
      this.router.navigate(['./secretry']);
    }
    else {
      this.errorMessage = 'שם משתמש או סיסמה שגויים';
    }
  }
}
