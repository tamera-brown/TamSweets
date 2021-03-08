import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../interfaces/order';
import {MatTableDataSource} from '@angular/material/table';
import { BakeryService } from '../services/bakery.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {


@Input() orders: Order[]=[];
displayedColumns: string[]=['image','name','price', 'quantity','action'];
dataSource:MatTableDataSource<Order>;





  constructor(private service:BakeryService, private router: Router) {
  
   }
  


  
  ngOnInit(): void {
    this.service.getAllOrders().subscribe(order=>{

      this.dataSource= new MatTableDataSource(order);
    
    });
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
