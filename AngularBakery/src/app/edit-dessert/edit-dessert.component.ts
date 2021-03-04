import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BakeryService } from '../bakery.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-edit-dessert',
  templateUrl: './edit-dessert.component.html',
  styleUrls: ['./edit-dessert.component.css']
})
export class EditDessertComponent implements OnInit {


  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr="Choose File"

  dessertId:number;
  name: string;
  description : string;
  price: number;
  image:string;

  url:string | ArrayBuffer;

 

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

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.readAsDataURL(event.target.files[0]); // read file as data url
    
  
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        
      }

      this.url=this.image;
      
       
    }
  }  
 
editDessert(){
let toedit={dessertId:this.dessertId,name:this.name,description:this.description,price:this.price,image:this.image}
this.service.editDessert(toedit).subscribe((res) => {this.router.navigate(['desserts'])
console.log(res)});


}
}

