import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';


import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';
import { ajax } from 'rxjs/ajax';
import { TestScheduler } from 'rxjs/testing';

import { NgRedux, NgReduxModule} from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE} from './users/store';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HousesComponent } from './houses/houses.component';
import { HouseListComponent } from './houses/house-list/house-list.component';
import { HouseDetailComponent } from './houses/house-detail/house-detail.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { HouseItemComponent } from './houses/house-list/house-item/house-item.component';
import { HouseStartComponent } from './houses/house-start/house-start.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HouseEditComponent } from './houses/house-edit/house-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HouseService } from './houses/house.service';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './login/signup/signup.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './login/auth-guard.service';
import { FilterPipe } from './houses/house-list/filter.pipe';
import { ShortenPipe } from './houses/house-list/house-item/shorten.pipe';
import { TodoOverviewComponent } from './users/todo-overview/todo-overview.component';
import { TodoListComponent } from './users/todo-list/todo-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { AuthInterceptor } from './shared/auth.interceptor';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './login/store/auth.effects';
import {StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment';
import { houseReducer } from './houses/store/house.reducers';
import { HouseEffects } from './houses/store/house.effects';
import { UserComponent } from './users/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HousesComponent,
    HeaderComponent,
    HouseDetailComponent,
    UsersComponent,
    HouseListComponent,
    HouseItemComponent,
    HouseStartComponent,
    DropdownDirective,
    HouseEditComponent,
    SignupComponent,
    FilterPipe,
    ShortenPipe,
    TodoOverviewComponent,
    TodoListComponent,
    UserComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgReduxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    StoreModule.forRoot( reducers ),
    EffectsModule.forRoot( [AuthEffects] ),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature('houses', houseReducer ),
    EffectsModule.forFeature([HouseEffects])
    
  ],
  providers: [HouseService, DataStorageService, AuthService, AuthGuard, 
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
