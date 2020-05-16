import { NgModule } from '@angular/core';

//Child components of admin layout needs entries in module file under admin. Below entry is needed for non child component like Login, registration etc.
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { MatTableModule } from  '@angular/material/table';
const modules = [
  MatCardModule, 
  MatInputModule, 
  MatButtonModule, 
  MatSelectModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatNativeDateModule,
 MatDatepickerModule,
 MatRadioModule,
 MatTableModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}