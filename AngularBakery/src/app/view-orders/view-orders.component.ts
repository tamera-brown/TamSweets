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

  constructor(private service:BakeryService, private router: Router) {
  
   }
  
  ngOnInit(): void {
    this.service.getAllOrders().subscribe(order=>{

      this.dataSource= new MatTableDataSource(order);
    
      for(let i=0; i<order.length;i++){
       
         this.subtotal+=order[i].totalPrice;
         
       
      }
         this.tax+=Math.round((this.subtotal * .05 + Number.EPSILON) * 100)/100;
         this.grandtotal+=this.subtotal+this.tax;

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

  Checkout() {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51ITZClDyU2NZNBpu39F2IxzFjJ3GTuKXUkV6HE0DcfkUmSXGRhUtB5KgceRN5ZMOHE7A5FLDJgF5c2VaybBv0fTP009zx9V792',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        // alert('Token Created!!');
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
          key: 'pk_test_51ITZClDyU2NZNBpu39F2IxzFjJ3GTuKXUkV6HE0DcfkUmSXGRhUtB5KgceRN5ZMOHE7A5FLDJgF5c2VaybBv0fTP009zx9V792',
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

