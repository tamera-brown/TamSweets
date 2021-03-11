import { Component, OnInit } from '@angular/core';
import { BakeryService } from '../services/bakery.service';
import { Dessert } from '../interfaces/dessert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bakery-inventory',
  templateUrl: './bakery-inventory.component.html',
  styleUrls: ['./bakery-inventory.component.css']
})
export class BakeryInventoryComponent implements OnInit {
  desserts:Dessert[];
  isLoading:boolean;
  Name:string;
  constructor(private service : BakeryService, private router:Router) { }

  ngOnInit(): void {
    this.service.getAllDesserts().subscribe(list => {
      this.desserts = list;
    }, (err)=>{
      this.isLoading=true;});
  }
Search(){
   
  this.service.getDessertByName(this.Name).subscribe((_=>{
    this.router.navigate(['desserts'])
    window.location.reload()
  }));

}
}
