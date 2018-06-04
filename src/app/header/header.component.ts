import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {  } from 'events';
import { DataStorageService } from '../shared/data-storage.service';
// import { Response } from '@angular/http';
//import { AuthService } from '../login/auth.service';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../login/store/auth.reducers';
import * as AuthActions from '../login/store/auth.actions';
import * as HouseActions from '../houses/store/house.actions';
// import { HttpEvent, HttpEventType } from '@angular/common/http';
// import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    authState: Observable<fromAuth.State>;

    constructor(
        private dataStorageService: DataStorageService,
        //private authService: AuthService,
        private store: Store<fromApp.AppState>
    ) {}

    ngOnInit() {
        this.authState = this.store.select('auth');
    }

    onSaveData(){
        this.store.dispatch(new HouseActions.StoreHouses());
        // this.dataStorageService.storeHouses().subscribe(
        //     // response: HttpEvent<Object>
        //     (response) => {
        //         console.log(response);
        //         // console.log(response.type === HttpEventType.Response);
        //     }
        // );
    }
    
    onFetchData(){
        //this.dataStorageService.getHouses();
        this.store.dispatch(new HouseActions.FetchHouses());
    }

    onDeleteData(){
        this.dataStorageService.deleteHouses();
    }

    onLogout(){
        // this.authService.logout();

        this.store.dispatch(new AuthActions.Logout());
    }

}