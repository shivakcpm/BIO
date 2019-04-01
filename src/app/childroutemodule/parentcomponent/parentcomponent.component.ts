import { Component, OnInit,ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.scss']
})
export class ParentcomponentComponent implements OnInit,AfterViewInit,AfterContentInit {

  constructor(private ele :ElementRef) {
    console.log(this.ele);
    console.log(this.ele.nativeElement);

   }

  ngOnInit() {
    console.log(this.ele);
  }
  ngAfterViewInit(){
    console.log(this.ele);

  }
  ngAfterContentInit(){
    console.log(this.ele);

  }

}
