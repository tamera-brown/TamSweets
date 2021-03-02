import { Component, OnInit } from '@angular/core';
import { BakeryService } from '../bakery.service';
import { Dessert } from '../dessert';

@Component({
  selector: 'app-bakery-iventory',
  templateUrl: './bakery-iventory.component.html',
  styleUrls: ['./bakery-iventory.component.css']
})
export class BakeryIventoryComponent implements OnInit {

  desserts:Dessert[];

  constructor(private service : BakeryService) { }

  ngOnInit(): void {
    this.service.getAllDesserts().subscribe(list => {
      this.desserts = list
    });
  }

}
