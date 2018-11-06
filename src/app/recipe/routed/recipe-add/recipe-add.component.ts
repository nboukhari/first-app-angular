import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {


  recipe: Recipe;

  constructor(private route: ActivatedRoute, private _router: Router, private _recipeService: RecipeService) {
    this.recipe = new Recipe();
   }

   showRecipe() {
    console.log('test', this.recipe);
  }

  newRecipe() {
    this.recipe.ingredients = [{
      'ingredientId': 1,
      'name': 'Dark rum (Appleton Estate Reserve)'
    }] as Ingredient[];
    console.log(this.recipe);
    this._recipeService.addRecipe(this.recipe).subscribe(() => this._router.navigate(['recipes']));
  }
  ngOnInit() {
  }

}
