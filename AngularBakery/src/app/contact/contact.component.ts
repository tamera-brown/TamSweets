import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

FormData: FormGroup;
messageSent:boolean;

  constructor(private fb :FormBuilder, private contact: ContactService) { }

  ngOnInit(): void {
    this.FormData = this.fb.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Message: new FormControl('', [Validators.required])
      
    })
  }
onSubmit(FormData){
this.contact.PostMessage(FormData).subscribe((_)=>{
  this.messageSent=true;
}, (err)=>{
  this.messageSent=false;
});
}

}
