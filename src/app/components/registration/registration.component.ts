import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private _registration: FormGroup;
  
  constructor(private _form: FormBuilder) { 
    this.createForm();
    console.log("Constructor:", this._registration.value);
   }

  ngOnInit() {
    console.log("ngOnInit", this._registration.value);
  }

  createForm() {
    this._registration = this._form.group({
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    });
    console.log("createForm:", this._registration.value);
  }

  onSubmit() {
    console.log(this._registration.value);
  }  

}
