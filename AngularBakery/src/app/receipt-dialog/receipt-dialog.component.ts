import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Order } from '../interfaces/order';
import { BakeryService } from '../services/bakery.service';

@Component({
  selector: 'app-receipt-dialog',
  templateUrl: './receipt-dialog.component.html',
  styleUrls: ['./receipt-dialog.component.css']
})
export class ReceiptDialogComponent implements OnInit {

  @Input() order:Order;

  orders:Order[];
  constructor(private service:BakeryService,private dialogRef: MatDialogRef<ReceiptDialogComponent>) { }

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
