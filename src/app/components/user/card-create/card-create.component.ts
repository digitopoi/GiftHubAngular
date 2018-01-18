import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CardService } from '../../../services/card.service';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { MatMenu } from '@angular/material/menu/typings/menu-directive';
import { FormArray } from '@angular/forms/src/model';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {
  @Output() addedCard = new EventEmitter<boolean>();

  cardCompanies;
  CompanyName;

  hasAccessNumber = false;
  hasExpiration = false;

  minDate = new Date();

  cardForm: FormGroup;

  constructor(private _form: FormBuilder,
              private _cardService: CardService,
              private _router: Router,
              private _snackBar: MatSnackBar) {
    this.createForm();
  }

  ngOnInit()
  {
    this._cardService.GetCompaniesDropdown().subscribe(companies => {
      console.log(companies);
      this.cardCompanies = companies;
    });
  }

  createForm() {
    this.cardForm = this._form.group({
      CompanyName: new FormControl,
      CardNumber: new FormControl,
      Amount: new FormControl [
        Validators.required,
        Validators.min(.01),
      ],
      ExpirationDate: new FormControl,
      AccessNumber: new FormControl

    });
  }

  onSubmit() {
    this._cardService.createCard(this.cardForm.value).subscribe(data => {
      let control: AbstractControl = null;
      this.addedCard.emit(true);
      this.openSnackBar('Giftcard added.', 'Thank you');
      this.cardForm.reset();
      this.cardForm.markAsUntouched();
      Object.keys(this.cardForm.controls).forEach((name) => {
        control = this.cardForm.controls[name];
        control.setErrors(null);
      });
    });
  }

  openSnackBar(message: string, dismiss: string): MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, dismiss, {
      duration: 2000,
    });
  }

}
