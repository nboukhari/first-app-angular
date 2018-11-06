import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './routed/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './routed/recipe-detail/recipe-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';
import { RouterModule } from '@angular/router';
import { RecipeOverviewComponent } from './routed/recipe-overview/recipe-overview.component';

@NgModule({
  declarations: [RecipeListComponent, RecipeDetailComponent, RecipeOverviewComponent],
  imports: [CommonModule, SharedModule, CustomMaterialModule, RouterModule]
})
export class RecipeModule { }
