import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../../services/order.service';
import {SessionStorageHelper} from '../../services/session-storage.helper';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(public bsModalRef: BsModalRef,
              private fb: FormBuilder,
              private orderService: OrderService,
              private sessionStorage: SessionStorageHelper) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      contactName: ['', Validators.required],
      contactEmail:['', Validators.compose([Validators.required, Validators.email])],
      contactPhone: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(10)])],
      contactMsgTopic: ['', Validators.required],
      contactMessage: ''
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value)
      this.sessionStorage.extendRequest(this.contactForm.value);
      this.orderService.sendContactUs(this.contactForm.value)
        .subscribe(res => console.log(res));
    }
    this.contactForm.markAsTouched();
  }

}
