import { Component, OnInit } from '@angular/core';
import { BakeryService } from '../bakery.service';
import { Dessert } from '../dessert';

@Component({
  selector: 'app-bakery-inventory',
  templateUrl: './bakery-inventory.component.html',
  styleUrls: ['./bakery-inventory.component.css']
})
export class BakeryInventoryComponent implements OnInit {
  desserts:Dessert[];
  isLoading:boolean;
  constructor(private service : BakeryService) { }

  ngOnInit(): void {
    this.service.getAllDesserts().subscribe(list => {
      this.desserts = list;
    }, (err)=>{
      this.isLoading=true;});
  }

}
