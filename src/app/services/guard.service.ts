import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  expiry: string | number;
  token: string
  constructor() {
  }
  getExpiry() {
    if (!this.expiry) {

     
      this.expiry = Number(localStorage.getItem("expires_in"));
    }
    return this.expiry;
  }
  verify(): Observable<boolean> {
   
    if(!this.getAccessToken())
      return of(false)
    if (new Date().getTime() > this.getExpiry()) {

   
      return of(false);
    }
    return of(true)
    


  }

  getAccessToken(){
    if(!this.token)
      this.token = localStorage.getItem("access_token")
    return this.token;
  }


}
