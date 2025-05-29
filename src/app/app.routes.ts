import { Routes } from '@angular/router';
import { LessonListComponent } from './componnents/lesson-list/lesson-list.component';
import { LoginComponent } from './componnents/login/login.component';
import { authGuard } from './guards/auth.guard';
import { CustomersComponent } from './componnents/customers/customers.component';
import { LessonDetailsComponent } from './componnents/lesson-details/lesson-details.component';
import { HomeComponent } from './componnents/home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "teacher", component: LessonListComponent, canActivate: [authGuard], data: { allowedRoles: ['teacher'] } },
    { path: "secretry", component: CustomersComponent, canActivate: [authGuard], data: { allowedRoles: ['secretry'] } },
    { path: "secretry/{id}", component: LessonDetailsComponent, canActivate: [authGuard], data: { allowedRoles: ['secretry'] } }
];
