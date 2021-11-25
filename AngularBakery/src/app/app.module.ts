import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DessertComponent } from './dessert/dessert.component';
import { AddDessertComponent } from './add-dessert/add-dessert.component';
import { BakeryInventoryComponent } from './bakery-inventory/bakery-inventory.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditDessertComponent } from './edit-dessert/edit-dessert.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { ContactComponent } from './contact/contact.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { CheckoutDialogComponent } from './checkout-dialog/checkout-dialog.component';
import { LoginComponent } from './login/login.component';



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
    ContactComponent,
    ViewOrdersComponent,
    CheckoutDialogComponent,
    LoginComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
