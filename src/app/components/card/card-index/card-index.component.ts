import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../services/card.service';
import { Card } from '../../../models/Card';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-card-index',
  templateUrl: './card-index.component.html',
  styleUrls: ['./card-index.component.css']
})
export class CardIndexComponent implements OnInit {

  card: Card[];
  columnNames = ['CompanyName', 'Amount', 'DonationUtc'];
  dataSource: CardDataSource | null;

  constructor(private _cardService: CardService) { }

  ngOnInit() {
    this._cardService.getCard().subscribe((card: Card[]) => {
      this.card = card;
      this.dataSource = new CardDataSource(card);
    });
  }

}

export class CardDataSource extends DataSource<any> {

  constructor(private cardData: Card[]) {
    super();
  }

  connect(): Observable<Card[]> {
    return Observable.of(this.cardData);
  }

  disconnect() { }
}
