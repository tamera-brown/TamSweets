import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../interfaces/order';
import {MatTableDataSource} from '@angular/material/table';
import { BakeryService } from '../services/bakery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

orders: Order[]=[];

@Input() Order:Order;


  constructor(private service:BakeryService, private router: Router) { }
  displayedColumns: string[] = ['image','name', 'price','quantity','action'];
  dataSource = new MatTableDataSource(this.orders);

  
  ngOnInit(): void {
    this.service.getAllOrders().subscribe(orders=>{
      this.dataSource=new MatTableDataSource(orders)
      console.log(orders);
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteOrder(orderId){
    this.service.deleteOrder(orderId).subscribe((_)=>{
    
      this.router.navigate(['orders'])});
    }
}
