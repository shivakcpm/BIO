import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenucomponentComponent } from './menucomponent/menucomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QueComponentComponent } from './que-component/que-component.component';
import { QuelistcomponentComponent } from './quelistcomponent/quelistcomponent.component';
import { ModalComponent } from './modal/modal.component';
import { AddmenuitemComponent } from './addmenuitem/addmenuitem.component';
import { FormsModule } from '@angular/forms';
import { OrderbevarageComponent } from './orderbevarage/orderbevarage.component';
import { HttpClientModule } from '@angular/common/http'; 
import {FeatureexampleModule} from './featureexample/featureexample.module';
import { PapaParseModule } from 'ngx-papaparse';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* import {SamplelazyModule} from './samplelazy/samplelazy.module'; */

@NgModule({
  
  declarations: [
    AppComponent,
    MenucomponentComponent,
    HomecomponentComponent,
    QueComponentComponent,
    QuelistcomponentComponent,
    AddmenuitemComponent,
    OrderbevarageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FeatureexampleModule,
    PapaParseModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    /* SamplelazyModule, */
    NgbModule.forRoot(),
  ],
  entryComponents: [
    AddmenuitemComponent,
    OrderbevarageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
