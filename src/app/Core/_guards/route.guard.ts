import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from '../_services/auth.service'

@Injectable({
  providedIn: 'root'
})

export class RouteGuard implements CanActivate {
  returnUrl: string
  tree: UrlTree

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLoggedIn = this.authService.userLoggedIn()
        if (isLoggedIn) {
          return this.router.parseUrl(this.returnUrl)
        }
        return true
      }
}
