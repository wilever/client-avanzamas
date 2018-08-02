import { Component, OnInit} from '@angular/core';

import { City } from '../model/city.model';
import { CityService } from '../service/city.service';
import { ReportMonth } from '../model/report.month.model';
import { SaleService } from '../service/sale.service';
import { ReportCountry } from '../model/report.country.model';
import { Sale } from '../model/sale.model';
import { Buyer } from '../model/buyer.model';
import { Country } from '../model/country.model';
import { BuyerService } from '../service/buyer.service';

@Component({
  selector: 'app-sale',
  templateUrl: '../view/sale.view.html'
})
export class SaleComponent implements OnInit {
  public reports: ReportMonth[];
  public reportByCountry: ReportCountry[];
  public sales: Sale[];
  public buyers: Buyer[];
  public cities: City[];
  public countries: Country[];
  constructor(
    private service: SaleService,
    private buyerService: BuyerService) {
  }
  ngOnInit() {
    this.getReport();
    this.getCountries();
  }
  getReport(): void {
    this.service.getReport()
      .subscribe(
        ok => this.reports = ok,
        error => this.showError(error));
  }
  getReportByCountry(country: string): void {
    this.service.getReportByCountry(country)
      .subscribe(
        ok => this.reportByCountry = ok,
        error => this.showError(error));
  }
  getCountries(): void {
    this.service.getCountries()
      .subscribe(
        ok => {this.countries = ok;
        console.log(this.countries); },
        error => this.showError(error));
  }
  getSaleByBuyer(buyer: string): void {
    this.service.getSaleByBuyer(buyer)
      .subscribe(
        ok => this.sales = ok,
        error => this.showError(error));
  }
  getBuyers() {
    this.buyerService.getData()
      .subscribe(
        ok => this.buyers = ok,
        error => this.showError(error));
  }
  showError(data: any) {
    console.log(data);
    alert(data.error.message);
  }
}
