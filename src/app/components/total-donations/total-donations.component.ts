import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/Card';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-total-donations',
  templateUrl: './total-donations.component.html',
  styleUrls: ['./total-donations.component.css']
})
export class TotalDonationsComponent implements OnInit {
  card: Card[];
  datasource: CardDataSource | null;
  totalAmount: number = 0;


  constructor(private _cardService: CardService) { }

  ngOnInit() {
    this._cardService.getDonation().subscribe((amount) => {
      console.log(amount);
      this.totalAmount = Number(amount);
    });
  }
}

export class CardDataSource extends DataSource<any> {
  constructor (private cardData: Card[]) {
    super();
  }

  connect(): Observable<Card[]> {
    return Observable.of(this.cardData);
  }

  disconnect() { }
}
