import { Component, Input, OnInit } from '@angular/core';
import { BakeryService } from '../services/bakery.service';
import { Dessert } from '../interfaces/dessert';
import { Router } from '@angular/router';
import { Order } from '../interfaces/order';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {

  @Input() dessert:Dessert;
   quantity:number;

  alreadyInCart:boolean;

  constructor(private service:BakeryService, private router: Router) { }

  ngOnInit(): void {

  
  }
  deletDessert(dessertId){
    this.service.deleteDessert(dessertId).subscribe((_)=>{
      {this.router.navigate(['desserts'])
      window.location.reload();
    }
    
    });
    }
    AddtoCart(dessertId){
      let added:Order={quantity:this.quantity};
      this.service.buyDessert(dessertId,added).subscribe((_)=>{
        {this.router.navigate(['desserts'])
      window.location.reload();
  }
      
      },(err)=>{
          this.alreadyInCart=true;
      });
    }
      
    
}
