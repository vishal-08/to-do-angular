import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


const MaterialComponent =[
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule
]

@NgModule({
 
  imports: [ MaterialComponent ],
  exports: [ MaterialComponent ]
})
export class MaterialModule { }
