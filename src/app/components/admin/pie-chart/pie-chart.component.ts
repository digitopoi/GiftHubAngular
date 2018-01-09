import { Observable } from 'rxjs/Rx';
import { Company } from './../../../models/Company';
import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  chart = [];
  company = [];
  companyNames = [];
  companyAmounts = [];
  dataSource: CompanyDataSource | null;

  constructor(private _companyService: CompanyService) { }

  ngOnInit() {
    this._companyService.getCompanies()
      .subscribe((company: Company[]) => {
        this.company = company;
        console.log('Response object:', this.company);
        this.companyNames = this.company.map(a => a.CompanyName);
        console.log('Company Names:', this.companyNames);
        this.companyAmounts = this.company.map(a => a.CompanyAmount);
        console.log('Company Amounts:', this.companyAmounts);
        this.dataSource = new CompanyDataSource(company);
      });
  }

}

export class CompanyDataSource extends DataSource<any> {

  constructor(private cardData: Company[]) {
    super();
  }

  connect(): Observable<Company[]> {
    return Observable.of(this.cardData);
  }

  disconnect() { }
}
