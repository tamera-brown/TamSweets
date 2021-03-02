import { Component, Input, OnInit } from '@angular/core';
import { BakeryService } from '../bakery.service';
import { Dessert } from '../dessert';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {

  @Input() dessert:Dessert;
  constructor(private service:BakeryService) { }

  ngOnInit(): void {

  
  }
  deletDessert(dessertId){
    this.service.deleteDessert(dessertId).subscribe();
    }

}
