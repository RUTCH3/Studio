import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const allowedRoles = route.data?.['allowedRoles'] as string[];

  if (authService.isAuthorized(allowedRoles)) {
    return true;
  } else {
    return router.createUrlTree(['/login']);
  }
};
