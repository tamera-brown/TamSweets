import { Component, OnInit } from '@angular/core';
import { BakeryService } from '../bakery.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  menus:Menu[];

  constructor(private service:BakeryService) { }

  ngOnInit(): void {
    this.service.getAllMenus().subscribe(list => {
      this.menus = list
    });
  }

}
