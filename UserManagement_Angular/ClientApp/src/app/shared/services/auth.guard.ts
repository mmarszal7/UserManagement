import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return this.authService.currentUserID.pipe(
            map(id => id.toString() === '0' || state.url === '/users/' + id)
        );
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return this.canActivate(route, state);
    }
}
