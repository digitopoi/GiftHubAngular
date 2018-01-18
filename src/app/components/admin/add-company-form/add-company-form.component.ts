import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CompanyService } from '../../../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company-form',
  templateUrl: './add-company-form.component.html',
  styleUrls: ['./add-company-form.component.css']
})
export class AddCompanyFormComponent {

  companyForm: FormGroup;

  constructor(private _form: FormBuilder, private _companyService: CompanyService, private _router: Router) {
    this.createForm();
  }

  createForm() {
    this.companyForm = this._form.group({
      CompanyName: new FormControl
    });
  }

  onSubmit() {
    this._companyService.createCompany(this.companyForm.value).subscribe(data => {
      console.log(this.companyForm.value);
    });
  }

}
