import { Component, Input, OnInit } from '@angular/core';
import { BakeryService } from '../services/bakery.service';
import { Dessert } from '../interfaces/dessert';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {

  @Input() dessert:Dessert;

  alreadyInCart:boolean;

  constructor(private service:BakeryService) { }

  ngOnInit(): void {

  
  }
  deletDessert(dessertId){
    this.service.deleteDessert(dessertId).subscribe((_)=>{
      window.location.reload();
    });
    }
    AddtoCart(dessertId){
      this.service.buyDessert(dessertId).subscribe((_)=>{
        window.location.reload();
      
      },(err)=>{
          this.alreadyInCart=true;
      });
    }
      
    
}
