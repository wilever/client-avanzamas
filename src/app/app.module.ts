import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';

import { UserService } from './service/user.service';
import { BuyerService } from './service/buyer.service';
import { CityService } from './service/city.service';

import { AppComponent } from './component/app.component';
import { UserComponent } from './component/user.component';
import { BuyerComponent } from './component/buyer.component';
import { CityComponent } from './component/city.component';
import { SaleComponent } from './component/sale.component';
import { SaleService } from './service/sale.service';
import { AppNavBarComponent } from './component/nav-bar.component';
import { ApiDocComponent } from './component/api-doc.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BuyerComponent,
    CityComponent,
    SaleComponent,
    AppNavBarComponent,
    ApiDocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
      UserService,
      BuyerService,
      CityService,
      SaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
