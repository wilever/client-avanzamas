import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Buyer } from '../model/buyer.model';

@Injectable()
export class BuyerService {

  constructor(private http: HttpClient) {}

  private buyerUrl = 'https://api-avanzamas.herokuapp.com/api/buyer';

  public getData() {
    return this.http.get<Buyer[]>(this.buyerUrl);
  }
}
