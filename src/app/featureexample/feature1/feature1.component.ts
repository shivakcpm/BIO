import { Component, OnInit,ViewChild,ViewChildren, QueryList, ElementRef, AfterViewInit, ContentChildren, AfterContentInit, ContentChild } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss']
})
export class Feature1Component implements OnInit,AfterContentInit {
  @ViewChildren(Feature1Component) elements : QueryList<Feature1Component>
  @ContentChild("someref") element: ElementRef;
  constructor() { }

  ngOnInit() {
   // console.log(this.element);
    //console.log(this.elements);
  }
  ngAfterContentInit(){
    console.log("After View Init");
    console.log(this.element);
    if(this.element)
    console.log(this.element.nativeElement);
  }
}
