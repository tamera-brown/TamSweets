import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DessertComponent } from './dessert/dessert.component';
import { AddDessertComponent } from './add-dessert/add-dessert.component';
import { BakeryInventoryComponent } from './bakery-inventory/bakery-inventory.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditDessertComponent } from './edit-dessert/edit-dessert.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    DessertComponent,
    AddDessertComponent,
    BakeryInventoryComponent,
    EditDessertComponent,
    NavComponent,
    HomeComponent,
    BakeryInventoryComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
