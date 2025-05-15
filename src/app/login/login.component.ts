import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public router: Router) { }
  userName: string = "";
  password: string = "";
  role: string = "";
  login() {
    let isManager = this.role == "מנהל" ? "true" : "false";
    sessionStorage.setItem("isManagerUser", isManager);

    if (isManager == "false")
      this.router.navigate(["./home"]);
    else
      this.router.navigate(["./subject"]);
  }
}
