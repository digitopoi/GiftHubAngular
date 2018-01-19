import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public _loginForm: FormGroup;

  constructor(private _form: FormBuilder, private authService: AuthService) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this._loginForm = this._form.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  //validate
  onSubmit(){
    this.authService.login(this._loginForm.value);
  }
}
