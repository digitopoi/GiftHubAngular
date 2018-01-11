import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Card } from '../../../models/card';
import { CardService } from '../../../services/card.service';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { MatMenu } from '@angular/material/menu/typings/menu-directive';
import { FormArray } from '@angular/forms/src/model';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {
  cardCompanies;

  minDate = new Date();

  cardForm: FormGroup;

  constructor(private _form: FormBuilder, private _cardService: CardService, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this._cardService.GetCompaniesDropdown().subscribe(companies =>{
      console.log(companies)
      this.cardCompanies = companies
    })
  }

  createForm() {
    this.cardForm = this._form.group({
      CompanyName: new FormControl,
      CardNumber: new FormControl,
      Amount: new FormControl,
      ExpirationDate: new FormControl,
      AccessNumber: new FormControl

    });
  }

  onSubmit() {
    this._cardService.createCard(this.cardForm.value).subscribe(data => {
      this._router.navigate(['/card']);
    });
  }
}
