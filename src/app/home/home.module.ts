import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import {MatIconModule} from  '@angular/material/icon' ;
import {MatDatepickerModule} from  '@angular/material/datepicker' ;
import {MatInputModule} from  '@angular/material/input' ;
import {MatFormFieldModule} from  '@angular/material/form-field' ;
import { MatNativeDateModule } from '@angular/material/core';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
