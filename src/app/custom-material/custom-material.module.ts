import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatButtonModule, MatInputModule],
  exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatInputModule],
  declarations: []
})
export class CustomMaterialModule { }
