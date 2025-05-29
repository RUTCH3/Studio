import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly userTypeKey = 'TorS';

  constructor() { }

  login(userType: 'secretry' | 'teacher'): void {
    sessionStorage.setItem(this.userTypeKey, userType);
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem(this.userTypeKey) !== null;
  }

  getUserType(): 'secretry' | 'teacher' | null {
    let userType = sessionStorage.getItem(this.userTypeKey) as 'secretry' | 'teacher' | null;
    return userType;
  }

  isAuthorized(allowedRoles: string[]): boolean {
    const userType = this.getUserType();
    return userType !== null && allowedRoles.includes(userType);
  }

  logout(): void {
    sessionStorage.removeItem(this.userTypeKey);
  }
}
