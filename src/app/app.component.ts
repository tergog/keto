import {Component, OnInit} from '@angular/core';
import {SpinnerService} from './services/spinner.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showSpinner: boolean;

  constructor(
    private spinnerService: SpinnerService,
    private http: HttpClient) {

  }

  ngOnInit(){
    this.spinnerService.showSpinner$.subscribe(res => this.showSpinner = res);

    this.http.get('https://jsonip.com')
      .subscribe((data:any) => {
        sessionStorage.setItem("ipAddress", data.ip);
      })
  }

}
