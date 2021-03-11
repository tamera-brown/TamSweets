import { Component, Input, OnInit } from '@angular/core';
import { BakeryService } from '../services/bakery.service';
import { Dessert } from '../interfaces/dessert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {

  @Input() dessert:Dessert;

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
      this.service.buyDessert(dessertId).subscribe((_)=>{
        {this.router.navigate(['desserts'])
      window.location.reload();
  }
      
      },(err)=>{
          this.alreadyInCart=true;
      });
    }
      
    
}
