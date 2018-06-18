import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class OrderGuard implements CanActivate {
  constructor(private router: Router) {};

  canActivate() {
    if (!!sessionStorage.getItem('prospectId')) {
      return true;
    } else {
      this.router.navigate(['/']);
    }
  }
}
