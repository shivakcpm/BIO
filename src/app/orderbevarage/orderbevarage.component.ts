import { Component,Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MenuserviceService } from '../menuservice.service';
import { MenuModel } from '../menu.model';
@Component({
  selector: 'app-order',
  templateUrl: './orderbevarage.component.html',
  styleUrls: ['./orderbevarage.component.scss']
})
export class  OrderbevarageComponent  {
  public name:string = "";
  public error:boolean = false;
  public message:string = "Bevarage Name required";
  public quantity:Number = 1;
  public bevarages: MenuModel[] = this.menuService.getMenuList();
  public bevarage : string = "";
  @Input() title = `Order Bevarage`;

  constructor(
    public activeModal: NgbActiveModal,public menuService : MenuserviceService 
  ) {}

  public addItem(){
    if(this.name == null || this.name == ""){
      this.message = "User Name required";
      this.error = true;
    }
    if(this.bevarage == "" || this.bevarage == null){
      this.message = "Please select bevarage"
      this.error = true;
  }
    if(!this.error){
      this.menuService.addItemToQue(this.bevarage,this.quantity,this.name);
      this.activeModal.close();
    }
  }

  


}