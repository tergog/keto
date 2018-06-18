import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {FaqComponent} from '../modals/faq/faq.component';
import {ShippingComponent} from '../modals/shipping/shipping.component';
import {PrivacyComponent} from '../modals/privacy/privacy.component';
import {ContactComponent} from '../modals/contact/contact.component';
import {DisclaimerComponent} from '../modals/disclaimer/disclaimer.component';
import {TermsComponent} from '../modals/terms/terms.component';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  bsModalRef: BsModalRef;
  productId: number;
  products = [
    {order: 2, id:509, selected: true},
    {order: 3, id:504},
    {order: 4, id:506}
  ];

  constructor(private modalService: BsModalService) { }

  ngOnInit() {

  }

  setProduct(product) {
    this.products.forEach(p => p.selected = false);
    product.selected = true;
    this.productId = product.id;
  }
// TODO: Make wrapper for modal (try pass component as parametr)

  openFaqModal() {
    this.bsModalRef = this.modalService.show(FaqComponent);
  }

  openShippingModal() {
    this.bsModalRef = this.modalService.show(ShippingComponent);
  }

  openPrivacyModal() {
    this.bsModalRef = this.modalService.show(PrivacyComponent);
  }

  openContactModal() {
    this.bsModalRef = this.modalService.show(ContactComponent);
  }

  openDisclaimerModal() {
    this.bsModalRef = this.modalService.show(DisclaimerComponent);
  }

  openTermsModal() {
    this.bsModalRef = this.modalService.show(TermsComponent);
  }
}
