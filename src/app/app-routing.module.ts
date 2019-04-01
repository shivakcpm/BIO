import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecomponentComponent} from './homecomponent/homecomponent.component'
import { Feature1Component } from './featureexample/feature1/feature1.component';
import { Feature2Component } from './featureexample/feature2/feature2.component';
 
const routes: Routes = [  { path: '',
component : HomecomponentComponent
},{ path: 'admin',
component : HomecomponentComponent,data:{isAdmin:false}
},{path : 'lazy',loadChildren:'./samplelazy/samplelazy.module#SamplelazyModule'},
{path:'admin',component : Feature2Component,outlet : "secondary"},
{path:'lazy',component : Feature1Component,outlet : "secondary"},
{path:'childroute',loadChildren:'./childroutemodule/childroutemodule.module#ChildroutemoduleModule'},
{path:'',component : Feature1Component,outlet : "secondary"},
{path:'childroute',component : Feature1Component,outlet : "secondary"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
