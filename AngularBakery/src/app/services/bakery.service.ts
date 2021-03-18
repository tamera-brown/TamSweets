import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dessert } from '../interfaces/dessert';
import { Menu } from '../interfaces/menu';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class BakeryService {

  baseURL : string = "http://localhost:8080/api";
  httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})}

  constructor(private http: HttpClient) { }

getAllDesserts():Observable<Dessert[]>{
return this.http.get<Dessert[]>(this.baseURL+"/desserts");
}
getDessertById(dessertId:number):Observable<Dessert>{
  return this.http.get<Dessert>(this.baseURL+`/dessert/${dessertId}`);
}
getDessertByName(dessertName: string): Observable<Dessert[]>{
  return this.http.get<Dessert[]>(this.baseURL+ `/dessert/name/${dessertName}`);
}
addDessert(tooAdd: Dessert):Observable<Dessert>{
  return this.http.post<Dessert>(this.baseURL+ "/addDessert",tooAdd,this.httpOptions);
}
editDessert(toedit:Dessert):Observable<Dessert>{
  return this.http.put<Dessert>(this.baseURL+"/editDessert" ,toedit, this.httpOptions);
}

deleteDessert(dessertId:number){
  return this.http.delete(this.baseURL+ `/deleteDessert/${dessertId}`);
}
buyDessert(dessertId:number, toadd:Order){
  return this.http.post(this.baseURL+`/buy/${dessertId}`,toadd,this.httpOptions);
}
getAllMenus():Observable<Menu[]>{
return this.http.get<Menu[]>(this.baseURL+"/menus");
}
getAllOrders():Observable<Order[]>{
  return this.http.get<Order[]>(this.baseURL+"/orders");
}
getOrderById(orderId:number):Observable<Order>{
  return this.http.get<Order>(this.baseURL + `/orders/${orderId}`)
}
editOrder(toedit:Order):Observable<Order>{
  return this.http.put<Order>(this.baseURL+"/editOrder",toedit,this.httpOptions)
}
deleteOrder(orderId:number){
  return this.http.delete(this.baseURL+ `/deleteOrder/${orderId}`);
}

}