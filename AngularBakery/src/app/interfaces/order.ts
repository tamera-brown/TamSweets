import { Dessert } from "./dessert";

export interface Order {
    orderId? : number;
    desserId:number;
    quantity:number;
    bagItem:Dessert
}
