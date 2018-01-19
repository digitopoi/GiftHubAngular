import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { CompanyService } from '../../../services/company.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-company-form',
  templateUrl: './add-company-form.component.html',
  styleUrls: ['./add-company-form.component.css']
})
export class AddCompanyFormComponent {

  companyForm: FormGroup;

  constructor(private _form: FormBuilder, private _companyService: CompanyService, private _router: Router, private _toast: ToastrService) {
    this.createForm();
  }

  createForm() {
    this.companyForm = this._form.group({
      CompanyName: new FormControl
    });
  }

  onSubmit() {
    this._companyService.createCompany(this.companyForm.value).subscribe(() => {
      let control: AbstractControl = null;
      this._toast.success('', 'Company Added!', {
        timeOut: 2500,
        positionClass: 'toast-bottom-center',
      });
      this.companyForm.reset();
      this.companyForm.markAsUntouched();
      Object.keys(this.companyForm.controls).forEach((name) => {
        control = this.companyForm.controls[name];
        control.setErrors(null);
      });
    });
  }

}
