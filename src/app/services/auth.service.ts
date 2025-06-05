import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly userTypeKey = 'TorS';

  constructor() { }

  login(userType: 'secretry' | 'teacher'): void {
    if (typeof window === 'undefined') {
      return;
    }
    sessionStorage.setItem(this.userTypeKey, userType);
  }

  isLoggedIn(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }
    return sessionStorage.getItem(this.userTypeKey) !== null;
  }

  getUserType(): 'secretry' | 'teacher' | null {
    if (typeof window === 'undefined') {
      return null;
    }
    let userType = sessionStorage.getItem(this.userTypeKey) as 'secretry' | 'teacher' | null;
    return userType;
  }

  isAuthorized(allowedRoles: string[]): boolean {
    const userType = this.getUserType();
    return userType !== null && allowedRoles.includes(userType);
  }

  logout(): void {
    if (typeof window === 'undefined') {
      return;
    }
    sessionStorage.removeItem(this.userTypeKey);
  }
}
