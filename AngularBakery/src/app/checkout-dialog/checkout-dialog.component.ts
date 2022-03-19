import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.css']
})
export class CheckoutDialogComponent implements OnInit {
  
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  handler:any = null;
  stripePromise=loadStripe(environment.stripe_key)
  
  
  constructor(public dialogRef:MatDialogRef<CheckoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{grandtotal:number},private fb:FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      First_Name:['',Validators.required],
      Last_Name:['',Validators.required],
      Phone_Num:['',Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      Date: ['', Validators.required],
      Time:['',Validators.required]
    });

   
    this.loadStripe();
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
      amount: this.data.grandtotal * 100
      
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

