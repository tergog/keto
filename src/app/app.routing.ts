import {HomeComponent} from "./home/home.component";
import {OrderComponent} from "./order/order.component";
import {Routes} from "@angular/router";
import {OrderGuard} from "./guards/order.guard";

export const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full', redirectTo: ''},
  {path: 'order', canActivate: [OrderGuard], component: OrderComponent, pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];
