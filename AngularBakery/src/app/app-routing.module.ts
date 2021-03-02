import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDessertComponent } from './add-dessert/add-dessert.component';
import { BakeryIventoryComponent } from './bakery-iventory/bakery-iventory.component';

const routes: Routes = [
  {path: "", component: BakeryIventoryComponent},
  {path: "add", component: AddDessertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
