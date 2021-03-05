import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../order';
import {MatTableDataSource} from '@angular/material/table';
import { BakeryService } from '../bakery.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
orders: Order[]=[];


  constructor(private service:BakeryService) { }
  displayedColumns: string[] = ['image','name', 'price','quantity'];
  dataSource = new MatTableDataSource(this.orders);

  
  ngOnInit(): void {
    this.service.getAllOrders().subscribe(orders=>{
      this.dataSource=new MatTableDataSource(orders)
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
