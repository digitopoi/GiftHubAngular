import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
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
  dataSource = new MatTableDataSource();
  

  constructor(private _cardService: CardService) { }

  ngOnInit() {
    this._cardService.getCard().subscribe((card: Card[]) => {
      this.card = card;
      this.dataSource.data = card;
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    document.getElementById("replaced").addEventListener("mouseenter", () => {
      document.getElementById("replaced").innerText = "No Refunds!!";
      document.getElementById("replaced").style.color = "red";
    })
    document.getElementById("replaced").addEventListener("mouseleave", () => {
      document.getElementById("replaced").innerText = "My Donations";
      document.getElementById("replaced").style.color = "black";
    })
  }



}

