import { NgModule } from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule}from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list'






const MaterialComponents=[
MatButtonModule,
MatIconModule,
MatBadgeModule,
MatProgressSpinnerModule,
MatMenuModule,
MatFormFieldModule,
MatInputModule,
MatCardModule,
MatToolbarModule,
FormsModule,
ReactiveFormsModule,
MatSidenavModule,
FlexLayoutModule,
MatTableModule,
MatDialogModule,
MatPaginatorModule,
MatStepperModule,
MatDatepickerModule,
MatNativeDateModule,
MatSelectModule,
MatCheckboxModule,
MatListModule
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
