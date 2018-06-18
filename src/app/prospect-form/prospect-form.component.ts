import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../services/order.service";
import {countries} from "../services/countries";
import {SessionStorageHelper} from "../services/session-storage.helper";
import {Router} from '@angular/router';
import {SpinnerService} from '../services/spinner.service';



@Component({
  selector: 'app-prospect-form',
  templateUrl: './prospect-form.component.html',
  styleUrls: ['./prospect-form.component.scss']
})
export class ProspectFormComponent implements OnInit {

  form: FormGroup;
  countries: any;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private orderService: OrderService,
    private sessionStorage: SessionStorageHelper,
    private spinnerService: SpinnerService) {
    this.countries = countries;

  }

  ngOnInit() {

    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(10)])],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['US', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.sessionStorage.shareForm = this.form.value;
      this.spinnerService.toggleSpinner(true);
      this.sessionStorage.extendRequest(this.form.value);
      this.orderService.sendPreOrder(this.form.value)
        .subscribe(res => {
          sessionStorage.setItem('prospectId', res['prospectId']);
          this.router.navigate(['/order']);
          this.spinnerService.toggleSpinner(false);
        });
    }
    this.form.markAsTouched();
  }

}
