import { Component, OnInit } from '@angular/core';
import { BakeryService } from '../services/bakery.service';
import { Order } from '../interfaces/order';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  orders:Order[]
  items:number=0;
  constructor(private service:BakeryService) { }

  ngOnInit(): void {
    this.service.getAllOrders().subscribe(list => {
      this.orders = list
      for(let i =0;i <list.length;i++){
        this.items+=list[i].quantity;
          }
     
    });
  }
  }


