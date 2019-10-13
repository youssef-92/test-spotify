import { Injectable } from '@angular/core';
import { CanActivate,  ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { map } from 'rxjs/operators';
import { CheckService } from './guard.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
    constructor(private checkService: CheckService ,private router:Router) {
    }
    
   
     
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkService.verify().pipe(map(ok => {
        
            if(ok) return true
            return this.router.parseUrl("login")
           
        }))


    }
  
}