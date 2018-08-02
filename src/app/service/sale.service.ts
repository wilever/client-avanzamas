import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ReportMonth } from '../model/report.month.model';
import { ReportCountry } from '../model/report.country.model';
import { Sale } from '../model/sale.model';
import { Country } from '../model/country.model';

@Injectable()
export class SaleService {

  constructor(private http: HttpClient) {}

  private saleUrl = 'https://api-avanzamas.herokuapp.com/api/sale/report';

  private countryUrl = 'https://api-avanzamas.herokuapp.com/api/country';

  public getReport() {
    return this.http.get<ReportMonth[]>(this.saleUrl);
  }
  public getReportByCountry(country: string) {
    return this.http.get<ReportCountry[]>(this.saleUrl + '?country=' + country);
  }
  public getSaleByBuyer(buyer: string) {
    return this.http.get<Sale[]>(this.saleUrl + '?buyer=' + buyer);
  }
  public getCountries() {
    return this.http.get<Country[]>(this.countryUrl);
  }
}
