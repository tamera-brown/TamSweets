import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  image:string;

  isSubmitted=false;

  constructor(private fb:FormBuilder,private service : BakeryService, private router: Router) { }
    dessertForm=this.fb.group({

      name:['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required]


    });
  

  ngOnInit(): void {
  }

  onSubmit(){
    this.isSubmitted=true;
    alert("Dessert Added");
  }
  addDessert(){
    let toAdd : Dessert = {dessertId:1,name: this.name, description: this.description,price:this.price,image:this.image}
     this.service.addDessert(toAdd).subscribe((_) => {this.router.navigate(['desserts'])});
  }

}
