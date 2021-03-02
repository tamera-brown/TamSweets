import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDessertComponent } from './add-dessert/add-dessert.component';
import { BakeryInventoryComponent } from './bakery-inventory/bakery-inventory.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo: 'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path: 'desserts', component:BakeryInventoryComponent},
  {path: "add", component: AddDessertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
