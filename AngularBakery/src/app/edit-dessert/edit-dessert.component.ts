import { Component, OnInit } from '@angular/core';
import { BakeryService } from '../bakery.service';
import { ActivatedRoute, Router } from '@angular/router';



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

 

  constructor(private service: BakeryService, private router:Router,private route:ActivatedRoute) { }
  
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
 
 
editDessert(){
let toedit={dessertId:this.dessertId,name:this.name,description:this.description,price:this.price,image:this.image}
this.service.editDessert(toedit).subscribe((res) => {this.router.navigate(['desserts'])
console.log(res)});

}
}

