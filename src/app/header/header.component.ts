import { Component } from '@angular/core';
import {  } from 'events';
import { DataStorageService } from '../shared/data-storage.service';
// import { Response } from '@angular/http';
import { AuthService } from '../login/auth.service';
// import { HttpEvent, HttpEventType } from '@angular/common/http';
// import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(
        private dataStorageService: DataStorageService,
        private authService: AuthService
    ) {}

    onSaveData(){
        this.dataStorageService.storeHouses().subscribe(
            // response: HttpEvent<Object>
            (response) => {
                console.log(response);
                // console.log(response.type === HttpEventType.Response);
            }
        );
    }
    
    onFetchData(){
        this.dataStorageService.getHouses();
    }

    onLogout(){
        this.authService.logout();
    }

}