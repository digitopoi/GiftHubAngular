import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private _registration: FormGroup;
  
  constructor(private _form: FormBuilder, private _authService: AuthService) { 
    this.createForm();
    
   }

  ngOnInit() {
    
  }

  createForm() {
    this._registration = this._form.group({
      email: new FormControl,
      username: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    });
    
  }

  onSubmit() {
    console.log(this._registration.value);
    this._authService
      .register(this._registration.value)
      .subscribe( () => {
        this._authService.login(this._registration.value)
      })  
    }
  }  


