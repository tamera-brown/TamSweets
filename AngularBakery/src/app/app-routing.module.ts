import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDessertComponent } from './add-dessert/add-dessert.component';
import { BakeryInventoryComponent } from './bakery-inventory/bakery-inventory.component';
import { ContactComponent } from './contact/contact.component';
import { EditDessertComponent } from './edit-dessert/edit-dessert.component';
import { HomeComponent } from './home/home.component'; import { MenusComponent } from './menus/menus.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

const routes: Routes = [
  {path:'',redirectTo: 'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'menus', component: MenusComponent},
  {path: 'desserts', component:BakeryInventoryComponent},
  {path: "add", component: AddDessertComponent},
  {path:"editDessert/:id",component:EditDessertComponent},
  {path:'contact', component:ContactComponent},
  {path:'orders',component:ViewOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
