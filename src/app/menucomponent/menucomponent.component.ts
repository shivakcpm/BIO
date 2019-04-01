import { Component, OnInit, ElementRef,ViewChild, Input } from '@angular/core';
import { MenuModel } from '../menu.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddmenuitemComponent} from '../addmenuitem/addmenuitem.component';
import { MenuserviceService } from '../menuservice.service';
import{ OrderbevarageComponent} from '../orderbevarage/orderbevarage.component'
import {Papa} from 'ngx-papaparse'
const letters = '0123456789ABCDEF';
@Component({
  selector: 'app-menucomponent',
  templateUrl: './menucomponent.component.html',
  styleUrls: ['./menucomponent.component.scss']
})

export class MenucomponentComponent implements OnInit {
  @ViewChild('custom-modal-1') editModal : ElementRef<any>; // Note: TemplateRef
public Menu : MenuModel[] = [];
  constructor(private modelService : NgbModal,private menuService : MenuserviceService,private papa : Papa) { }
@Input()
public isAdmin : boolean= false;

view: any[] = [700, 700];
public showErrors : boolean = false;
// options
showXAxis = true;
showYAxis = true;
gradient = false;
showLegend = true;
showXAxisLabel = true;
xAxisLabel = 'Year';
showYAxisLabel = true;
yAxisLabel = 'Score';
timeline = true;

colorScheme = {
  domain: []
};

// line, area
autoScale = true;
public dataToChart : any[] = [];
  ngOnInit() {
  //  this.Menu.push({"BeverageId" : "1d10b218-f4da-4ae3-a383-de1657dbaa6a","Name":"Fizz"});
    //this.Menu.push({"BeverageId" : "1d10b218-f4da-4ae3-a383-de1657dbaa6b","Name":"Appy"});
    //this.Menu.push({"BeverageId" : "1d10b218-f4da-4ae3-a383-de1657dbaa6c","Name":"Pepsi"});
    this.Menu = this.menuService.getMenuList();
  }

  public launchModal(modelNo : number){

   this.modelService.open(modelNo == 0 ? AddmenuitemComponent : OrderbevarageComponent);
  
  }
  public onFileChange(event){
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      this.parseData(file);
   
    }
  }

  private getRandomColor() {
   
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  public parseData(file){
   var self = this;
   this.dataToChart.length = 0;
  
    this.papa.parse(file, {
      complete: function(results) {
        if(results.errors != null && results.errors.length > 0){
          self.showErrors = true;
          self.dataToChart = [];
          return;
        }
        self.showErrors = false;
        results.data.map(function(item:Array<any>){
          if(item.length == 0){
            
          }else{
         let model = {name:"",series : []};
          
            item.map(function(value,index){
                if(index == 0){
                  model.name = value;
                }else{
                  let data: Array<String> = value.split("|");
                  if(data.length <2){
                    self.showErrors = true;
                    self.dataToChart = [];
                    return;
                  }
                  model.series.push({name : data[0],value : data[1]});
                }
            });
            if(model.name != null && model.name !=""){            
            self.colorScheme.domain.push(self.getRandomColor());
            self.dataToChart.push(model);
            }else if((model.name == null || model.name == "") && model.series.length > 0){
              self.dataToChart = [];
              self.showErrors = true;
              return;
            }
          }
         
        })
        //this.dataToChart = models;
        if(self.dataToChart.length == 0){
          self.showErrors = true;
        }
      }
    });
  }
}
