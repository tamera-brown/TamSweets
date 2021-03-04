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


  name: string;
  description : string;
  price: number;
  image:string;

  url:string | ArrayBuffer;


  constructor(private service : BakeryService, private router: Router) { }
  

  ngOnInit(): void {
  }

  addDessert(){
    let toAdd : Dessert = {name: this.name, description: this.description,price:this.price,image:this.image}
     this.service.addDessert(toAdd).subscribe((_) => {this.router.navigate(['desserts'])});
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.readAsDataURL(event.target.files[0]); // read file as data url
    
  
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        
      }
       
    }
  }  
}