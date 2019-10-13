import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { getLocaleTimeFormat } from '@angular/common';

@Component({
  selector: 'app-check.token',
  templateUrl: './check.token.component.html',
  styleUrls: ['./check.token.component.sass']
})
export class CheckTokenComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  public href: string;
  private now: number;
  private date = new Date;
  private time: number;
  public accessToken: string;
  public expiryPeriod: string;
  ngOnInit() {


    this.route.fragment.subscribe((fragment: string) => {
      fragment.split("&").forEach(s => {


        let keyValue = s.split("=");
        if (keyValue[0] == "expires_in") {
          let y = +keyValue[1]

          keyValue[1] = (y * 1000 + this.date.getTime()).toString()


        }

        localStorage.setItem(keyValue[0], keyValue[1])


      })
      this.router.navigate(["/playlist"])
    });

  }

}




