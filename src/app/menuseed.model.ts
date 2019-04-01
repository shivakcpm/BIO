import { MenuModel } from './menu.model';
export class MenuSeedModel {
    Description: string;
    BeverageBarDate: string;
    BeverageIds: string[];
    Beverages: MenuModel[];
    public addMenuItem(menuItem: MenuModel): boolean {
        if (this.BeverageIds.indexOf(menuItem.BeverageId) == -1) {
            this.Beverages.push(menuItem);
            this.BeverageIds.push(menuItem.BeverageId);
            return true;
        }
        return false;
    }
} 
