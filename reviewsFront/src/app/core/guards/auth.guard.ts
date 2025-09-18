// src/app/core/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  Router,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

private checkAuth(): boolean | UrlTree {
 
    const isAuth = this.authService.isAuthenticated(); // Verificación sincrónica
    if (isAuth) {
      return true;
    } 
    if (typeof window !== "undefined" && !isAuth) {
      this.router.navigate(['']);
      
    }
return false;
  }

  canActivate(): boolean | UrlTree {
    return this.checkAuth();
  }

  canActivateChild(): boolean | UrlTree {
    return this.checkAuth();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree {
    return this.checkAuth();
  }
}
