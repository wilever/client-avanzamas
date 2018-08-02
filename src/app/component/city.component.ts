import { Component, OnInit} from '@angular/core';

import { City } from '../model/city.model';
import { CityService } from '../service/city.service';

@Component({
  selector: 'app-city',
  templateUrl: '../view/city.view.html'
})
export class CityComponent implements OnInit {
  public city: City = new City;
  public cities: City[];
  constructor(private service: CityService) {
  }
  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.service.getData()
      .subscribe(
        ok => this.cities = ok,
        error => this.showError(error));
  }
  showError(data: any) {
    console.log(data);
    alert(data.error.message);
  }
}
