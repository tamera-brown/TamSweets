import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DessertComponent } from './dessert/dessert.component';
import { AddDessertComponent } from './add-dessert/add-dessert.component';
import { BakeryIventoryComponent } from './bakery-iventory/bakery-iventory.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DessertComponent,
    AddDessertComponent,
    BakeryIventoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
