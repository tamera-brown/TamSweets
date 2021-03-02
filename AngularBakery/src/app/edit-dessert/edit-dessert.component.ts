import { Component, Input, OnInit } from '@angular/core';
import { BakeryService } from '../bakery.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { Dessert } from '../dessert';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-edit-dessert',
  templateUrl: './edit-dessert.component.html',
  styleUrls: ['./edit-dessert.component.css']
})
export class EditDessertComponent implements OnInit {

  dessertId:number;
  name: string;
  description : string;
  price: number;
  image:string;
  isSubmitted=false;

 

  constructor(private fb : FormBuilder, private service: BakeryService, private router:Router,private route:ActivatedRoute) { }
  editForm=this.fb.group({

    name:['',Validators.required],
    description:['',Validators.required],
    price:['',Validators.required]


  });
  ngOnInit(): void {
    
   
    this.dessertId=parseInt(this.route.snapshot.paramMap.get('id'));

    console.log(this.dessertId);

    this.service.getDessertById(this.dessertId).subscribe(res=>{
      this.name=res.name;
      this.description=res.description;
      this.price=res.price;
      this.image=res.image;
      
    });
  }
  onSubmit(){
    this.isSubmitted=true;
    alert("Dessert edited");
  }
 
 
editDessert(toedit){
toedit={desserId:this.dessertId,name:this.name,description:this.description,price:this.price}
this.service.editDessert(toedit).subscribe((_) => {this.router.navigate(['desserts'])});

}
}

