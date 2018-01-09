import { Observable } from 'rxjs/Rx';
import { Company } from './../../../models/Company';
import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company.service';
import { Chart } from 'chart.js';

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

        //  animate? https://codepen.io/balix/pen/XXwBpW

        this.chart = new Chart('canvas', {
          type: 'doughnut',
          data: {
            labels: this.companyNames,
            datasets: [{
              label: 'Donation totals',
              data: this.companyAmounts,
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
              ],
              borderColor: [
                'rgba(255,99,132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ],
            borderWidth: 1,
            hoverBackgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            segmentShowStroke: true,
            segmentStrokeColor: '#fff',
            segmentStrokeWidth: 2,
            percentageInnerCutout: 50,
            responsive: true,
            maintainAspectRatio: true,
            }]
          },
        });
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
