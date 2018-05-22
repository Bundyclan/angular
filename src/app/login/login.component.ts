import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  animal: string;
  name: string;

  constructor(private authService: AuthService ) { }

  
  ngOnInit() {
  }

  onLogin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.loginUser(email, password);
  }

}
