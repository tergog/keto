import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {OrderComponent} from './order/order.component';
import {RouterModule} from '@angular/router';


import {ModalModule} from 'ngx-bootstrap';
import {FaqComponent} from './modals/faq/faq.component';
import {ContactComponent} from './modals/contact/contact.component';
import {PrivacyComponent} from './modals/privacy/privacy.component';
import {ShippingComponent} from './modals/shipping/shipping.component';
import {TermsComponent} from './modals/terms/terms.component';
import {DisclaimerComponent} from './modals/disclaimer/disclaimer.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { ProspectFormComponent } from './prospect-form/prospect-form.component';
import { FinalProspectFormComponent } from './final-prospect-form/final-prospect-form.component';
import {OrderService} from "./services/order.service";
import {SessionStorageHelper} from "./services/session-storage.helper";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {Ng2PageScrollModule} from "ng2-page-scroll";
import { SpinnerComponent } from './spinner/spinner.component';
import {SpinnerService} from './services/spinner.service';
import {appRoutes} from "./app.routing";
import {OrderGuard} from "./guards/order.guard";

const modals = [
  ContactComponent,
  DisclaimerComponent,
  PrivacyComponent,
  ShippingComponent,
  TermsComponent,
  FaqComponent
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    ...modals,
    ProspectFormComponent,
    FinalProspectFormComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    Ng2PageScrollModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot()

  ],
  entryComponents: [
    ...modals
  ],
  providers: [
    OrderService,
    SessionStorageHelper,
    SpinnerService,
    OrderGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
