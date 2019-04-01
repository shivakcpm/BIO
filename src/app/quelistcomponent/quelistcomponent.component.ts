import { Component, OnInit, Input } from '@angular/core';
import { OrderModel } from '../order.model';
import { MenuserviceService} from '../menuservice.service'

@Component({
  selector: 'app-quelistcomponent',
  templateUrl: './quelistcomponent.component.html',
  styleUrls: ['./quelistcomponent.component.scss']
})
export class QuelistcomponentComponent implements OnInit {
  @Input()
  public data: OrderModel[] = [];
  @Input()
  public isAdmin:boolean = false;
  @Input()
  public state: string = "";
  constructor(public menuService : MenuserviceService) { }
  public title="";
  ngOnInit() {
    this.title = this.state == "que" ? "Move To Mix" : this.state == "mix" ? "Move to Collect":"Mark as Delivered";
  }
  changeState(id : string){
    if(this.state =="que"){
      this.menuService.moveToBeingMixed(id);
    }else if(this.state =="mix"){
      this.menuService.moveToReadyToCollect(id);
    }else{
      this.menuService.markOrderAsDelivered(id);
    }
  }
}