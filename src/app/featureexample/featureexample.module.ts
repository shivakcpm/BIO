import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature1/feature1.component';
import { Feature2Component } from './feature2/feature2.component';

@NgModule({
  declarations: [Feature1Component, Feature2Component],
  imports: [
    CommonModule
  ],
  exports : [Feature1Component,Feature2Component]
})
export class FeatureexampleModule { }
