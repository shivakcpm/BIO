import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router"


@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.scss'],

})
export class HomecomponentComponent implements OnInit {
  public isAdmin = false;
  public sub ;
  constructor(private router: Router,public route: ActivatedRoute) {
    console.log(route);
  }

  ngOnInit() {
  this.isAdmin = this.router.url.indexOf("/admin") !=-1;
  this.route.data.subscribe(v => console.log(v));
  }

}
