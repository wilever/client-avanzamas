import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './component/user.component';
import { BuyerComponent } from './component/buyer.component';
import { CityComponent } from './component/city.component';
import { SaleComponent } from './component/sale.component';
import { ApiDocComponent } from './component/api-doc.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserComponent },
  { path: 'buyers', component: BuyerComponent },
  { path: 'cities', component: CityComponent },
  { path: 'sales', component: SaleComponent },
  { path: 'documentation', component: ApiDocComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
