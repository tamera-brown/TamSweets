import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../interfaces/order';
import {MatTableDataSource} from '@angular/material/table';
import { BakeryService } from '../services/bakery.service';
import { Router } from '@angular/router';
import { Dessert } from '../interfaces/dessert';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReceiptDialogComponent } from '../receipt-dialog/receipt-dialog.component';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

@Input() orders: Order[]=[];
displayedColumns: string[]=['image','name','price', 'quantity','action'];
dataSource:MatTableDataSource<Order>;

orderId:number;
dessertId:number;
quantity:number;
bagItem:Dessert;
totalPrice:number;



  constructor(private service:BakeryService, private dialog:MatDialog) {
  
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
  editOrder(orderId){
  
    this.service.getOrderById(orderId).subscribe((res=>{
      this.orderId=res.orderId;
    this.dessertId=res.dessertId;
    this.bagItem=res.bagItem;


   
    let toedit={orderId:this.orderId,dessertId:this.dessertId,quantity:this.quantity,bagItem:this.bagItem,totalPrice:this.totalPrice}
    console.log(toedit);
  this.service.editOrder(toedit).subscribe();
  window.location.reload();
    }));

    
  }
  deleteOrder(orderId){
    this.service.deleteOrder(orderId).subscribe((_)=>{
    window.location.reload();
      });
    }
    openDialog(){
      const dialogConfig=new MatDialogConfig();
      dialogConfig.disableClose=true;
      dialogConfig.autoFocus=true;

      this.dialog.open(ReceiptDialogComponent,dialogConfig);
    }
}
