import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Card } from '../../../models/card';
import { CardService } from '../../../services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {

  cardForm: FormGroup;

  constructor(private _form: FormBuilder, private _cardService: CardService, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
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
