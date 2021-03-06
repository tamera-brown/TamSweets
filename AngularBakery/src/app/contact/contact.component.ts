import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

FormData: FormGroup;

  constructor(private http: HttpClient, private fb :FormBuilder, private contact: ContactService) { }

  ngOnInit(): void {
    this.FormData = this.fb.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Message: new FormControl('', [Validators.required])
      
    })
  }
onSubmit(FormData){
this.contact.PostMessage(FormData).subscribe();
}
}
