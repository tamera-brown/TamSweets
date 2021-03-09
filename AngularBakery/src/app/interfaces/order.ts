import { Dessert } from "./dessert";

export interface Order {
    orderId? : number;
    dessertId:number;
    bagItem:Dessert
    quantity:number;
    totalPrice:number

}
