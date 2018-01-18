import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/Card';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-print-view',
  templateUrl: './print-view.component.html',
  styleUrls: ['./print-view.component.css']
})
export class PrintViewComponent implements OnInit {
  card: Card[];
  columnNames = ['DonationUtc', 'CompanyName', 'Amount'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  @Input('matSortStart')
  start: 'asc' | 'desc'

  constructor(private _cardService: CardService) { }

  ngOnInit() {
    this._cardService.getCard().subscribe((card: Card[]) => {
      this.card = card;
      this.dataSource.data = card;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;

    document.getElementById('replaced').addEventListener('mouseenter', () => {
      document.getElementById('replaced').innerText = 'No Refunds!!';
      document.getElementById('replaced').style.color = 'red';
    })
    document.getElementById('replaced').addEventListener('mouseleave', () => {
      document.getElementById('replaced').innerText = 'My Donations';
      document.getElementById('replaced').style.color = 'black';
    })
  }

  refreshTable() {
    console.log('ngOnChanges fired in child!!');
    this._cardService.getCard().subscribe((card: Card[]) => {
      this.card = card;
      this.dataSource.data = card;
    });
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-view').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=80%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print View</title>  
          <style>
          .something {
            color: red;
          }
          </style>      
        </head>
    <body onload="window.print();window.close()">${printContents}
          <p class="something">hey</p>
    </body>
      </html>`
    );
    popupWin.document.close();
}

}
