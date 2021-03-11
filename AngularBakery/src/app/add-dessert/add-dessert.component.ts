import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BakeryService } from '../services/bakery.service';
import { Dessert } from '../interfaces/dessert';
import {DomSanitizer} from '@angular/platform-browser';
import { UploadfileService } from '../services/uploadfile.service';


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
  url:string | ArrayBuffer




  
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;

  constructor(private service : BakeryService,private domsanitizer:DomSanitizer, private router: Router, private uploadService: UploadfileService){ }
  

  ngOnInit(): void {
  }

  addDessert(){
    let toAdd : Dessert = {name: this.name, description: this.description,price:this.price,image:this.image}
     this.service.addDessert(toAdd).subscribe((_) => {this.router.navigate(['desserts'])
    });
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
        
        
        this.image= "./src/assets/" +this.currentFileUpload.name;
      
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

