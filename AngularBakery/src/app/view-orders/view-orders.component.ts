import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../interfaces/order';
import {MatTableDataSource} from '@angular/material/table';
import { BakeryService } from '../services/bakery.service';
import { Router } from '@angular/router';
import { Dessert } from '../interfaces/dessert';


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
subtotal:number=0;
tax:number=0;
grandtotal:number=0;



handler:any = null;

  constructor(private service:BakeryService) {
  
   }
  
  ngOnInit(): void {
    this.service.getAllOrders().subscribe(order=>{

      this.dataSource= new MatTableDataSource(order);
    
      for(let i=0; i<order.length;i++){
       
         this.subtotal+=order[i].totalPrice;
         this.tax+=this.subtotal * 0.05;
         this.grandtotal+=this.subtotal+this.tax;
       
      }
      

    });
   
    this.loadStripe();
  }
  
  editOrder(orderId){
  
    this.service.getOrderById(orderId).subscribe((res=>{
    this.orderId=res.orderId;
    this.dessertId=res.dessertId;
    this.bagItem=res.bagItem;
    this.totalPrice=res.totalPrice;


   
    let toedit={orderId:this.orderId,dessertId:this.dessertId,quantity:this.quantity,bagItem:this.bagItem,totalPrice:this.totalPrice}
   
  this.service.editOrder(toedit).subscribe();
  window.location.reload();
    }));

    
  }
  Subtotal():number{
  
    let subtotal=0;
    for(let i=0; i<this.orders.length;i++){
      subtotal+=this.orders[i].totalPrice;
      console.log(this.subtotal);
    }
    return subtotal;
  }
  deleteOrder(orderId){
    this.service.deleteOrder(orderId).subscribe((_)=>{
    window.location.reload();
      });
    }
   

   
  print(){
    window.print();
  } 

  Checkout() {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Payment',
      description: 'Thank you for your business',
      amount: this.grandtotal * 100
    });
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
}

