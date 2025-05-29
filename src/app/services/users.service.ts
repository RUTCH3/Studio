import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }
  users: User[] = [
    { id: "111", userName: "aa", phone: "1234", email: "aa@gmail.com", role: "T", password: "123456" },
    { id: "222", userName: "bb", phone: "2345", email: "aa@gmail.com", role: "S", password: "rwgethe" },
    { id: "333", userName: "cc", phone: "3456", email: "aa@gmail.com", role: "T", password: "24t53erdf" },
    { id: "444", userName: "dd", phone: "4567", email: "aa@gmail.com", role: "S", password: "435etdfd" },
    { id: "555", userName: "ee", phone: "5678", email: "aa@gmail.com", role: "T", password: "3t5efdew" },
    { id: "666", userName: "ff", phone: "6789", email: "aa@gmail.com", role: "T", password: "w4t35yrefr" },
    { id: "777", userName: "gg", phone: "7890", email: "aa@gmail.com", role: "T", password: "3a5trgdf" },
  ];

  get(userName: string, password: string) {
    let user = this.users.find(u => u.userName === userName && u.password === password);
    return user;
  }
}
