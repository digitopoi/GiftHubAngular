import { TotalDonationsComponent } from './../total-donations/total-donations.component';
import { CardIndexComponent } from './card-index/card-index.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild(CardIndexComponent) cardIndex: CardIndexComponent;
  @ViewChild(TotalDonationsComponent) total: TotalDonationsComponent;

  constructor() { }

  ngOnInit() {
  }

  addedCard(cardAdded: boolean) {
    this.cardIndex.refreshTable();
    this.total.refreshTotal();
  }

}
