import { Component, Input, OnInit } from '@angular/core';
import { BakeryService } from '../bakery.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { Dessert } from '../dessert';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-dessert',
  templateUrl: './edit-dessert.component.html',
  styleUrls: ['./edit-dessert.component.css']
})
export class EditDessertComponent implements OnInit {

  @Input() dessert:Dessert;
  // dessertId:number;
  name: string;
  description : string;
  price: number;
  isSubmitted=false;

  constructor(private fb : FormBuilder, private service: BakeryService, private router:Router) { }
  editForm=this.fb.group({

    name:['',Validators.required],
    description:['',Validators.required],
    price:['',Validators.required]


  });
  ngOnInit(): void {
  }
  onSubmit(){
    this.isSubmitted=true;
    alert("Dessert edited");
  }
 
editDessert(toedit){
toedit={name:this.name,description:this.description,price:this.price}
this.service.editDessert(toedit).subscribe((_=>{this.router.navigate(['desserts'])}));

}
  

  
}
