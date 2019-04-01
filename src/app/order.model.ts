import { MenuModel } from './menu.model'
export class OrderModel {
    OrderCreatedTimeStamp: String;
    BeverageBarOrderId: String;
    OrderedBeverage: MenuModel;
    OrderQuantity: Number; 
    IsBeingMixed: Boolean; 
    IsReadyToCollect: Boolean; 
    IsCollected: Boolean; 
    BeverageBarUserId: String; 
    BeverageBarUserFirstName: String; 
    OrderDeliveredTimeStamp: String

}