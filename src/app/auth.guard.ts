import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private apiServ: ApiService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.apiServ.getUserProfile().pipe(
      map(prof => {
        const isRegistered = !!prof;
        if(isRegistered) {
          this.apiServ.setAuthenticatedStatus(isRegistered);
          return true;
        } else {
          this.router.navigate(['/registration']);
          return false
        }
      })
    );
  }
}
