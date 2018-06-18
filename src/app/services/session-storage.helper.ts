import {Injectable} from "@angular/core";
import {ActivatedRoute} from "@angular/router";



const requiredParams = ['AFID', 'SID', 'C1', 'C2', 'C3'];

@Injectable()
export class SessionStorageHelper {

  shareForm = {
    firstName: '',
    lastName:'',
    email:'',
    phone:'',
    address:'',
    city:'',
    country:'',
    state:'',
    zipCode:''
  };

  constructor(private route: ActivatedRoute) {
    this.setToStorage(this.route.snapshot.queryParams);
    sessionStorage.setItem('campiagnId', this.checkDevice());
  }

  checkDevice() {
    return window.innerWidth <= 800 && window.innerHeight <= 600 ? '324' : '325';
  }

  setToStorage(query) {
    requiredParams.forEach(p => {
      if (!!query[p]) {
        sessionStorage.setItem(p.toLowerCase(), query[p]);
      }
    })
  }

  extendRequest(data) {
    let keys = ['affid', 'afid', 'sid', 'aid', 'c1', 'c2', 'c3', 'opt', 'orderId', 'click_id', 'campiagnId'];

    data['ipAddress'] = sessionStorage.getItem('ipAddress');
    data['prospectId'] = sessionStorage.getItem('prospectId');
    for (let i = 0; i < keys.length; i++) {
      if (sessionStorage.getItem(keys[i]) != null) {
        data[keys[i]] = sessionStorage.getItem(keys[i]);
      }
    }
  }
}
