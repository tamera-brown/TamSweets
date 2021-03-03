import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';



const MaterialComponents=[
MatButtonModule,
MatIconModule,
MatBadgeModule,
MatProgressSpinnerModule,
MatMenuModule,
MatFormFieldModule,
MatInputModule,
MatCardModule
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports:[
   MaterialComponents
  ]
})
export class MaterialModule { }
