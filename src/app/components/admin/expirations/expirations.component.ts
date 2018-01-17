import { Observable } from 'rxjs/Rx';
import { CardService } from './../../../services/card.service';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-expirations',
  templateUrl: './expirations.component.html',
  styleUrls: ['./expirations.component.css']
})
export class ExpirationsComponent implements OnInit {

  expirationsDataSource: ExpirationsDataSource | null;

  public expirationsColumnNames = ['id', 'company', 'amount', 'expiration'];

  constructor(private _cardService: CardService) { }

  ngOnInit() {
    this._cardService.getExpirations().subscribe(d => {
      console.log(d);
      this.expirationsDataSource = new ExpirationsDataSource(d);
    });
  }


}

export class ExpirationsDataSource extends DataSource<any> {

  constructor(private _expirations) {
    super();
  }

  connect(collectionViewer): Observable<any[]> {
    return Observable.of(this._expirations);
  }

  disconnect(collectionViewer): void { }
}
