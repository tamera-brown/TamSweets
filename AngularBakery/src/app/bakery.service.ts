import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dessert } from './dessert';
import { Menu } from './menu';

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
addDessert(tooAdd: Dessert):Observable<Dessert>{
  return this.http.post<Dessert>(this.baseURL+ "/addDessert",tooAdd,this.httpOptions);
}
editDessert(toedit:Dessert):Observable<Dessert>{
  return this.http.put<Dessert>(this.baseURL+"/editDessert",toedit, this.httpOptions);
}

deleteDessert(dessertId:number){
  return this.http.delete(this.baseURL+ `/deleteDessert/${dessertId}`);
}
getAllMenus():Observable<Menu[]>{
return this.http.get<Menu[]>(this.baseURL+"/menus");
}


}