import { Component, OnInit } from '@angular/core';
import { BakeryService } from '../services/bakery.service';
import { Dessert } from '../interfaces/dessert';

@Component({
  selector: 'app-bakery-inventory',
  templateUrl: './bakery-inventory.component.html',
  styleUrls: ['./bakery-inventory.component.css']
})
export class BakeryInventoryComponent implements OnInit {
  desserts:Dessert[];
  isLoading:boolean;
  Name:string;
  constructor(private service : BakeryService) { }

  ngOnInit(): void {
    this.service.getAllDesserts().subscribe(list => {
      this.desserts = list;
    }, (err)=>{
      this.isLoading=true;});
  }
Search(){
   console.log(this.Name);
  this.service.getDessertByName(this.Name).subscribe();
}
}
