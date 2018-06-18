import {Component, OnInit} from '@angular/core';

import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {FaqComponent} from '../modals/faq/faq.component';
import {ShippingComponent} from '../modals/shipping/shipping.component';
import {PrivacyComponent} from '../modals/privacy/privacy.component';
import {ContactComponent} from '../modals/contact/contact.component';
import {DisclaimerComponent} from '../modals/disclaimer/disclaimer.component';
import {TermsComponent} from '../modals/terms/terms.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {

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
