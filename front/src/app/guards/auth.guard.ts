import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

export const authGuard: CanActivateFn = (_, __) => {
  const authService = inject( AuthService );
  const router = inject( Router );

  return authService.isAuthenticated().then( (isAuthenticated) => {
    if ( isAuthenticated ) return true;

    router.navigateByUrl('/auth/login');
    return false;
  })
};
