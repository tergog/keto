import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

const prospectUrl = 'https://v3backend.gettotalgarciniacambogia.com:10090/order/prospect';
const finalProspectUrl = 'https://v3backend.gettotalgarciniacambogia.com:10090/order/newOrderProspect';
const contactUsUrl = 'https://keto-purefit.net/keto_slim/contact_us_handler';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {}

  sendPreOrder (data) {
    return this.http.post(prospectUrl, data)
  }

  createOrder(data) {
    return this.http.post(finalProspectUrl, data)
  }

  sendContactUs(data){
    return this.http.post(contactUsUrl, data)
  }
}
