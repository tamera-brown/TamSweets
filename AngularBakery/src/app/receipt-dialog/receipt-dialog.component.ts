import { Component, Inject, Input, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Order } from '../interfaces/order';
import { BakeryService } from '../services/bakery.service';

@Component({
  selector: 'app-receipt-dialog',
  templateUrl: './receipt-dialog.component.html',
  styleUrls: ['./receipt-dialog.component.css']
})
export class ReceiptDialogComponent implements OnInit {

  @Input() order:Order;
  subtotal:number;
  orders:Order[];
  constructor(private service:BakeryService,private dialogRef: MatDialogRef<ReceiptDialogComponent>,
     @Inject(MAT_DIALOG_DATA) data){
       this.subtotal=data.subtotal;
     } 

  ngOnInit(): void {
   this.service.getAllOrders().subscribe(list => {
      this.orders = list});
  }
close(){
this.dialogRef.close();
}
print(){
  window.print();
}

}
