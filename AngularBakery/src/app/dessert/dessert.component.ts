import { Component, Input, OnInit } from '@angular/core';
import { Dessert } from '../dessert';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {

  @Input() dessert:Dessert;
  constructor() { }

  ngOnInit(): void {

  
  }

}
