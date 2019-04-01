import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [{
  path: "", component: ParentcomponentComponent, children: [
    { path: "", redirectTo: "sub1" },
    { path: "sub1", component: Sub1Component },
    { path: "sub2", component: Sub2Component }
  ]
}];

@NgModule({
  declarations: [ParentcomponentComponent, Sub1Component, Sub2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ParentcomponentComponent, Sub1Component, Sub2Component, RouterModule]
})
export class ChildroutemoduleModule { }
