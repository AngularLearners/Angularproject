import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthChildGuard implements CanActivateChild {
  canActivateChild(): boolean {
    // alert('Access denied for this child');
    return true;
  }
}
