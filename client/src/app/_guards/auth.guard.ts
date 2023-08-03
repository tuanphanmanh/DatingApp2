import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService,
    private toastr: ToastrService, private router: Router){}
    
   canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (user) return true;
        else {
          this.toastr.error('You shall not pass!');
          return false
        }
      })
    )
  }
 }




