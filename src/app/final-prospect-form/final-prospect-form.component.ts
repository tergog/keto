import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../services/order.service";
import {countries} from "../services/countries";
import {SessionStorageHelper} from "../services/session-storage.helper";

@Component({
  selector: 'app-final-prospect-form',
  templateUrl: './final-prospect-form.component.html',
  styleUrls: ['./final-prospect-form.component.scss']
})
export class FinalProspectFormComponent implements OnInit {

  @Input('productId')
  set productId (value) {
    if (value) this.form.value.productId = value;
  }

  form: FormGroup;
  billingInfo: boolean;
  countries: any;
  showCard = false;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private sessionStorage: SessionStorageHelper) {
    this.countries = countries;
  }

  ngOnInit() {

    this.form = this.fb.group({
      firstName: [this.sessionStorage.shareForm.firstName, Validators.required],
      lastName: [this.sessionStorage.shareForm.lastName, Validators.required],
      email: [this.sessionStorage.shareForm.email, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      phone: [this.sessionStorage.shareForm.phone, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(10)])],
      address: [this.sessionStorage.shareForm.address, Validators.required],
      city: [this.sessionStorage.shareForm.city, Validators.required],
      country: [this.sessionStorage.shareForm.country, Validators.required],
      state: [this.sessionStorage.shareForm.state, Validators.required],
      zipCode: [this.sessionStorage.shareForm.zipCode, Validators.required],
      productId: 509,
      shippingId: '5',

      billFirstName: [''],
      billLastName: [''],
      billAddress: [''],
      billCity: [''],
      billCountry: ['US'],
      billState: [''],
      billZipCode: [''],

      cardNumber: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])],
      cardExpMonth: ['', Validators.required],
      cardExpYear: ['', Validators.required],
      cvv: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(3)])]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.sessionStorage.extendRequest(this.form.value);
      this.orderService.createOrder(this.form.value)
        .subscribe(res => console.log(res));
    }
    this.form.markAsTouched();
  }

  onSelectionChange(bool){
    this.billingInfo = bool;
  }

}
