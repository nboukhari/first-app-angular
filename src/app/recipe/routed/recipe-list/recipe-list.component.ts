import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private _recipeService: RecipeService) {
    this._recipeService.getRecipies().subscribe(recipes => this.recipes = recipes);
  }

  ngOnInit() {
    console.log('ngOnInit', this.recipes);
  }

}
