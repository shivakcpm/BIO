import { Component,Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MenuserviceService } from '../menuservice.service';
import { MenuModel } from '../menu.model';
@Component({
  selector: 'app-addmenuitem',
  templateUrl: './addmenuitem.component.html',
  styleUrls: ['./addmenuitem.component.scss']
})
export class  AddmenuitemComponent  {
  public menuItem:string = "";
  public error:boolean = false;
  public message:string = "Bevarage Name required";
  @Input() title = `Information`;

  constructor(
    public activeModal: NgbActiveModal,public menuService : MenuserviceService 
  ) {}

  public addItem(){
    if(this.menuItem == null || this.menuItem == ""){
      this.message = "Bevarage Name required";
      this.error = true;
    }
    if(this.isAlreadyExist(this.menuItem)){
      this.message = "Bevarage item with the same name already exist "
      this.error = true;
  }
    if(!this.error){
      this.menuService.addMenuItem(this.menuItem);
      this.activeModal.close();
    }
  }

  
  private isAlreadyExist(name : string):boolean{
    var menu : MenuModel[] = this.menuService.getMenuList();
    var found = false;
    if(menu != null && menu.length > 0){
      menu.forEach( function(menuModel){
        if(menuModel.Name == name.trim()){
          found = true;
        }
      }); 
    }
    return found;
  }

}