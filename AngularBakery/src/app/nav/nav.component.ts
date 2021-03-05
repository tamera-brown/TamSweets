import { Component, OnInit } from '@angular/core';
import { BakeryService } from '../bakery.service';
import { Order } from '../order';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  orders:Order[]
  items:number
  constructor(private service:BakeryService) { }

  ngOnInit(): void {
    this.service.getAllOrders().subscribe(list => {
      this.orders = list
      this.items=list.length;
      console.log(this.items)
    });
  }
  }


