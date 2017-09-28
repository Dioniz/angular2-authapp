import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated()) {
      console.log("El Guard paso!");
      return true;
    } else {
      console.error("Bloqueado por el Guard");
      this.router.navigate(['/home']);
      return false;
    }
  }

}
