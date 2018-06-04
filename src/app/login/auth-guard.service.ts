import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Store } from "@ngrx/store";
import 'rxjs/add/operator/map';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private store: Store<fromApp.AppState>
        //private authService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('auth')
            .take(1)
            .map((authState: fromAuth.State ) => {
            return authState.authenticated;
        });
        //return this.authService.isAuthenticated();
    }
}