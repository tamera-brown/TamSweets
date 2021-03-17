import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../interfaces/order';
import {MatTableDataSource} from '@angular/material/table';
import { BakeryService } from '../services/bakery.service';
import { Router } from '@angular/router';
import { Dessert } from '../interfaces/dessert';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutDialogComponent } from '../checkout-dialog/checkout-dialog.component';


@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {


@Input() orders: Order[]=[];

displayedColumns: string[]=['image','name','price', 'quantity','action','totalprice'];

dataSource:MatTableDataSource<Order>;

orderId:number;
dessertId:number;
quantity:number;
bagItem:Dessert;
totalPrice:number;
subtotal:number=0.00;
tax:number=0.00;
grandtotal:number=0.00;





  constructor(private service:BakeryService, private router: Router, public dialog: MatDialog) {
  
   }
  
  ngOnInit(): void {
    this.service.getAllOrders().subscribe(order=>{

      this.dataSource= new MatTableDataSource(order);
    
      for(let i=0; i<order.length;i++){
       
         this.subtotal+=order[i].totalPrice;
         
       
      }
         this.tax+=Math.round((this.subtotal * .05 + Number.EPSILON) * 100)/100.;
         this.grandtotal+=this.subtotal+this.tax;

    });
   
  
  }
  
  editOrder(orderId){
  
    this.service.getOrderById(orderId).subscribe((res=>{
    this.orderId=res.orderId;
    this.dessertId=res.dessertId;
    this.bagItem=res.bagItem;
    this.totalPrice=res.totalPrice;


   
    let toedit={orderId:this.orderId,dessertId:this.dessertId,quantity:this.quantity,bagItem:this.bagItem,totalPrice:this.totalPrice}
   
  this.service.editOrder(toedit).subscribe((_=>{this.router.navigate(['orders'])
  window.location.reload();

}));
  
    }));

    
  }
  
  deleteOrder(orderId){
    this.service.deleteOrder(orderId).subscribe((_)=>{
      this.router.navigate(['orders']);
    window.location.reload();
      });
    }
   

   
  print(){
    window.print();
    this.router.navigate(['orders']);
    window.location.reload();
  } 

 
  openDialog() {
    const dialogRef = this.dialog.open(CheckoutDialogComponent,{
      data:{grandtotal:this.grandtotal}
    });
  }
}

