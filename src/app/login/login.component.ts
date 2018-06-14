import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NgForm } from '@angular/forms';
//import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as AuthActions from './store/auth.actions';
import { SignupComponent } from './signup/signup.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    // private authService: AuthService 
    private store: Store<fromApp.AppState>,
    //public dialog: MatDialog
  ) { }

  // openDialog(): void {
  //   let dialogRef = this.dialog.open(SignupComponent, {
  //     width: '250px',
  //     data: { name: this.email, animal: this.password }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.email = result;
  //   });
  // }


  
  ngOnInit() {
  }

  onLogin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TrySignin({username: email, password: password}));
    //this.authService.loginUser(email, password);
  }

}
