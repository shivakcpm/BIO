import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import {FeatureexampleModule} from '../featureexample/featureexample.module'

const routes: Routes = [
  { path: '', component: Component1Component },
  { path: 'component2', component: Component2Component },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes), CommonModule,FeatureexampleModule
  ],
  declarations: [Component1Component, Component2Component],
  exports : [Component1Component,Component2Component]
})
export class SamplelazyModule { }
