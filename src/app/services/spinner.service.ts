import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class SpinnerService {

  private isSpinnerShow = new  BehaviorSubject<boolean>(false);


  showSpinner$ = this.isSpinnerShow.asObservable();

  constructor() { }

  toggleSpinner(val){
    this.isSpinnerShow.next(val);
  }

}
