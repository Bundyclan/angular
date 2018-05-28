import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';


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
    ShortenPipe
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    MatMenuModule
    
  ],
  providers: [HouseService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
