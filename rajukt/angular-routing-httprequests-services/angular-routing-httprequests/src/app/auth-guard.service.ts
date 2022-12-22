import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGaurd implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if (this.auth.isAuthenticated()) {
      return this.auth.isAuthenticated();
    } else {
      // alert('Access denied');
      return true;
    }
    // return this.auth.isAuthenticated()
    //.then((authenticated: boolean) => {
    //   if (authenticated) {
    //     return true;
    //   } else {
    //    return  this.route.navigate['/'];
    //   }
    //   return false;
    //});
  }
}
