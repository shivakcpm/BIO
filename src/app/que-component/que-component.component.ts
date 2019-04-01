import { Component, OnInit,Input } from '@angular/core';
import { OrderModel } from '../order.model';
import { MenuserviceService } from '../menuservice.service';

@Component({
  selector: 'app-que-component',
  templateUrl: './que-component.component.html',
  styleUrls: ['./que-component.component.scss']
})
export class QueComponentComponent implements OnInit {
  @Input()
  public isAdmin : boolean= false;
  public inTheQue: OrderModel[] = [];
  public beingMixed: OrderModel[] = [];
  public readyToCollect: OrderModel[] = [];

  constructor(private menuService: MenuserviceService) {

  }


  public formList() {
    this.menuService.orders.forEach((order: OrderModel) => {
      if (!order.IsCollected) {
        if (!order.IsBeingMixed) {
          this.inTheQue.push(order);
        } else if (!order.IsReadyToCollect) {
          this.beingMixed.push(order);
        } else {
          this.readyToCollect.push(order);
        }
      }
    })
  }
  ngOnInit() {
      this.formList();
    this.menuService.methodCall.subscribe(result => {

      this.inTheQue = [];
      this.beingMixed = [];
      this.readyToCollect = [];
      this.formList();
    })

  }

}
