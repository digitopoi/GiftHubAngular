import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { Validators } from '@angular/forms';

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
      username: new FormControl ('', Validators.required),
      password: new FormControl ('', Validators.required)
    });
  }

  onSubmit() {
    this.authService.login(this._loginForm.value);
    let control: AbstractControl = null;
    this._loginForm.reset();
      this._loginForm.markAsUntouched();
      Object.keys(this._loginForm.controls).forEach((name) => {
        control = this._loginForm.controls[name];
        control.setErrors(null);
      });
  }
}
