import { Component, OnInit } from '@angular/core';
import { BakeryService } from '../bakery.service';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-edit-dessert',
  templateUrl: './edit-dessert.component.html',
  styleUrls: ['./edit-dessert.component.css']
})
export class EditDessertComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.description.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.price.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('name') ? 'Not a valid name' : '';
   
  }
  constructor() { }

  ngOnInit(): void {
  }

  

  
}
