import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BakeryService } from '../bakery.service';
import { Dessert } from '../dessert';
import {DomSanitizer} from '@angular/platform-browser';
import { UploadfileService } from '../uploadfile.service';


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
  
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;

  constructor(private service : BakeryService, private router: Router,private domsanitizer: DomSanitizer, private uploadService: UploadfileService){ }
  

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
        console.log(this.url.toString().trim.length);
        let Trusted =this.domsanitizer.bypassSecurityTrustResourceUrl(this.url.toString().trim());
      
        console.log(Trusted);
        this.image=this.url.toString().trim();
        console.log(this.image.length);
        
      }
     
    }
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
        alert('File Successfully Uploaded');  
      }
    

    this.selectedFiles = undefined;
      }
    );
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  downloadFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '_File_Saved_Path');
    link.setAttribute('download', 'file_name.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}

