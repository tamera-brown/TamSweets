import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BakeryService } from '../bakery.service';
import { Dessert } from '../dessert';

@Component({
  selector: 'app-add-dessert',
  templateUrl: './add-dessert.component.html',
  styleUrls: ['./add-dessert.component.css']
})
export class AddDessertComponent implements OnInit {

  dessertId:number;
  name: string;
  description : string;
  price: number;

  constructor(private service : BakeryService, private router: Router) { }

  ngOnInit(): void {
  }

  addDessert(){
    let toAdd : Dessert = {dessertId:1,name: this.name, description: this.description,price:this.price}
     this.service.addDessert(toAdd).subscribe((_) => {this.router.navigate(['desserts'])});
  }

}
