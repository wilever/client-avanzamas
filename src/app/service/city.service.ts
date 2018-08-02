import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { City } from '../model/city.model';

@Injectable()
export class CityService {

  constructor(private http: HttpClient) {}

  private cityUrl = 'https://api-avanzamas.herokuapp.com/api/city';

  public getData() {
    return this.http.get<City[]>(this.cityUrl);
  }
}
