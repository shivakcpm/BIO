import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { MenuModel } from './menu.model';
import { MenuSeedModel} from './menuseed.model';
import {OrderModel} from './order.model';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {
  
  private messageSource = new Subject<any>();
  methodCall = this.messageSource.asObservable();

  private  BEVARAGE_ID_PREFIX : string = "241ae7d5-4ccb-4b74-8783-";
  private BEVARAGE_ORDER_ID : string="6aba8c4f-4d2c-41f7-ac96-";
  private BEVARAGE_USER_ID_PREFIX : string ="U0";
  private possible:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  public menuSeedModel : MenuSeedModel;
  public orders : OrderModel[] = [];
  constructor() { 
    this.menuSeedModel = new MenuSeedModel();
    this.menuSeedModel.Description = "BIO Beverage Menu";
    this.menuSeedModel.BeverageBarDate = "2018-09-28T15:17:40.033+00:00";
    this.menuSeedModel.BeverageIds = ["04d8e4eb-306e-4ff3-a027-7bed4da883f8", "0ae5a67d-d055-4fef-9a0a-889001dcb241", "1d10b218-f4da-4ae3-a383-de1657dbaa6a", "241ae7d5-4ccb-4b74-8783-bbe2c55f162f", "2630c442-84a7-4e44-829f-38e15f7fcbbb"];
    this.menuSeedModel.Beverages = [{ "BeverageId": "04d8e4eb-306e-4ff3-a027-7bed4da883f8", "Name": "Sparkling Cranberry Punch" }, { "BeverageId": "0ae5a67d-d055-4fef-9a0a-889001dcb241", "Name": "Raspberry Fizz" }, { "BeverageId": "1d10b218-f4da-4ae3-a383-de1657dbaa6a", "Name": "Virgin Frozen Margarita" }, 
    { "BeverageId": "241ae7d5-4ccb-4b74-8783-bbe2c55f162f", "Name": "Iced Chocolate Delight" }, { "BeverageId": "2630c442-84a7-4e44-829f-38e15f7fcbbb", "Name": "Summer Punch" }]
  this.orders = [{
    OrderCreatedTimeStamp: "04-05-2019",
    BeverageBarOrderId: "tye7648894",
    OrderedBeverage: {BeverageId:"somd64784",Name:"Iced Chocolate Delight"},
    OrderQuantity: 1,
    IsBeingMixed: false, 
    IsReadyToCollect: false,
    IsCollected: false,
    BeverageBarUserId: "fder8585885",
    BeverageBarUserFirstName: "Shiva",
    OrderDeliveredTimeStamp: "04-05-2019"
  },{
    OrderCreatedTimeStamp: "04-05-2019",
    BeverageBarOrderId: "tye7648892",
    OrderedBeverage: {BeverageId:"somd64784",Name:"Iced Chocolate Delight"},
    OrderQuantity: 1,
    IsBeingMixed: false, 
    IsReadyToCollect: false,
    IsCollected: false,
    BeverageBarUserId: "fder8585885",
    BeverageBarUserFirstName: "Shiva",
    OrderDeliveredTimeStamp: "04-05-2019"
  },{
    OrderCreatedTimeStamp: "04-05-2019",
    BeverageBarOrderId: "tye7648897",
    OrderedBeverage: {BeverageId:"somd64784",Name:"Iced Chocolate Delight"},
    OrderQuantity: 2,
    IsBeingMixed: false, 
    IsReadyToCollect: false,
    IsCollected: false,
    BeverageBarUserId: "fder8585885",
    BeverageBarUserFirstName: "Shiva",
    OrderDeliveredTimeStamp: "04-05-2019"
  }]
  }

  public addMenuItem(menuTitle : string):Boolean | Observable<Boolean>{
    var menu : MenuModel = {BeverageId : this.BEVARAGE_ID_PREFIX+this.getRandomId(12),Name:menuTitle};
   return this.menuSeedModel.addMenuItem(menu);
 }

 public getRandomId(length : Number) : string {
  var textGen:string = "";
    
    for (var i = 0; i < length; i++){
      textGen += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
 }
  
   return textGen;
 }
 public getMenuList() : MenuModel[]{
   return this.menuSeedModel.Beverages;
 }
 
 public getBevarageByID(id:string) : MenuModel{
   var relatedMenu:MenuModel;
   this.menuSeedModel.Beverages.forEach((menuItem:MenuModel)=>{
      if(menuItem.BeverageId == id){
        relatedMenu =  menuItem;
      }
   });
   return relatedMenu;
 }

 public getOrderById(id:string) : OrderModel{
   var relatedOrder:  OrderModel;
   this.orders.forEach((order:OrderModel)=>{
      if(order.BeverageBarOrderId == id){
        relatedOrder =   order;
      }
   })
   return relatedOrder;
 }
 public addItemToQue(bevarageId:string,quantity:Number,userName : string){
    var orderModel = new OrderModel();
    orderModel.BeverageBarUserFirstName = userName;
    orderModel.BeverageBarUserId = this.BEVARAGE_USER_ID_PREFIX + this.getRandomId(7);
    orderModel.IsBeingMixed = false;
    orderModel.IsCollected = false;
    orderModel.IsReadyToCollect = false;
    orderModel.OrderCreatedTimeStamp = new Date().toDateString();
    orderModel.OrderQuantity = quantity;
    orderModel.OrderedBeverage = this.getBevarageByID(bevarageId);
    orderModel.BeverageBarOrderId = this.BEVARAGE_ORDER_ID + this.getRandomId(12);
    this.orders.push(orderModel);
    this.messageSource.next();
    
 }
 public moveToBeingMixed(orderId : string){
  var order:OrderModel = this.getOrderById(orderId);
      order.IsBeingMixed = true;
      this.messageSource.next();

 }
 public moveToReadyToCollect(orderId : string){
  var order:OrderModel = this.getOrderById(orderId);
      order.IsReadyToCollect = true;
      this.messageSource.next();

 }
 public markOrderAsDelivered(orderId : string){
  var order:OrderModel = this.getOrderById(orderId);
      order.IsCollected = true;
      order.OrderDeliveredTimeStamp = new Date().toDateString();
      this.messageSource.next();

 }
}
