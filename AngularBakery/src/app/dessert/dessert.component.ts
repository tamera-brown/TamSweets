import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BakeryService } from '../bakery.service';
import { Dessert } from '../dessert';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {

  @Input() dessert:Dessert;

  isbuy:string=null;
  Quantity:number
  constructor(private service:BakeryService, private router:Router) { }

  ngOnInit(): void {

  
  }
  deletDessert(dessertId){
    this.service.deleteDessert(dessertId).subscribe((_)=>{this.router.navigate(['desserts'])});
    }
    AddtoCart(dessertId){
      this.isbuy="buy";
      
    }
}
