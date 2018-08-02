import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

import { Buyer } from '../model/buyer.model';
import { BuyerService } from '../service/buyer.service';
import { SaleService } from '../service/sale.service';
import { Sale } from '../model/sale.model';

@Component({
  selector: 'app-buyer',
  templateUrl: '../view/buyer.view.html'
})
export class BuyerComponent implements OnInit {
  public buyer: Buyer = new Buyer;
  public buyers: Buyer[];
  public sales: Sale[];
  public showHistory: boolean;
  constructor(
    private service: BuyerService,
    private saleService: SaleService) {
  }
  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.service.getData()
      .subscribe(
        ok => this.buyers = ok,
        error => this.showError(error));
  }
  showError(data: any) {
    console.log(data);
    alert(data.error.message);
  }
  getSaleHistory(buyer: Buyer) {
    this.saleService.getSaleByBuyer(buyer.name)
      .subscribe(
        ok => this.getHistoryOk(ok, buyer),
        error => this.showError(error));
  }
  getHistoryOk(
      data: any,
      buyer: Buyer) {
    console.log(data);
    this.buyer = buyer;
    this.sales = data;
    this.showHistory = true;
  }
}
