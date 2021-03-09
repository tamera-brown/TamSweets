import { Dessert } from "./dessert";

export interface Order {
    orderId? : number;
    dessertId:number;
    quantity:number;
    bagItem:Dessert
}
