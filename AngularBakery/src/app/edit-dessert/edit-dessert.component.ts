import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BakeryService } from '../services/bakery.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadfileService } from '../services/uploadfile.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';



@Component({
  selector: 'app-edit-dessert',
  templateUrl: './edit-dessert.component.html',
  styleUrls: ['./edit-dessert.component.css']
})
export class EditDessertComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;

  url:string|ArrayBuffer;


  dessertId:number;
  name: string;
  description : string;
  price: number;
  image:string;



 

  constructor(private service: BakeryService, private router:Router,private route:ActivatedRoute, private uploadService : UploadfileService) { }
  
  ngOnInit(): void {
    
   
    this.dessertId=parseInt(this.route.snapshot.paramMap.get('id'));

  
    this.service.getDessertById(this.dessertId).subscribe(res=>{
      this.name=res.name;
      this.description=res.description;
      this.price=res.price;
      this.image=res.image;
      
    });

  }  
 
editDessert(){
let toedit={dessertId:this.dessertId,name:this.name,description:this.description,price:this.price,image:this.image.replace("C:\\fakepath\\","../../assets/")}
this.service.editDessert(toedit).subscribe((res) => {this.router.navigate(['desserts'])});


}
change($event) {
  this.changeImage = true;
}

changedImage(event) {
  this.selectedFile = event.target.files[0];
}

upload() {
  this.progress.percentage = 0;

  this.currentFileUpload = this.selectedFiles.item(0);
  this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
    if (event.type === HttpEventType.UploadProgress) {
      this.progress.percentage = Math.round(100 * event.loaded / event.total);
    } else if (event instanceof HttpResponse) {
      // alert('File Successfully Uploaded');  
      
    
    }

  

  this.selectedFiles = undefined;
    }
  );
}

selectFile(event) {
  if (event.target.files && event.target.files[0]) {
    const file=event.target.files[0];
   

    var reader = new FileReader();
    var filename=event.target.files[0].name;
    console.log(filename);
    
  
    reader.readAsDataURL(file); // read file as data url
    console.log(file);
  
    reader.onload = () => { // called once readAsDataURL is completed
    
    this.url = reader.result;
    }
  }
  //console.log(this.url);
  this.selectedFiles = event.target.files; 
//  console.log(document.getElementById('customFile').attributes[7].nodeValue=document.getElementById('customFile').attributes[7].nodeValue.replace("C:\\fakepath\\",""));
// console.log(document.getElementById('customFile'))
 //  console.log(this.image.replace("C:\\fakepath\\",""));
}



}

