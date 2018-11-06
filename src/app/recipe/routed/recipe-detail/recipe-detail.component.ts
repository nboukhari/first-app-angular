import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../shared/recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
@Input()
recipe: Recipe;
displayIngredient = false;
displayInstruction = false;

@Output()
myEventEmitter: EventEmitter<Recipe>;

  constructor(private route: ActivatedRoute, private _recipeService: RecipeService) {
    this.myEventEmitter = new EventEmitter();
   }

  ngOnInit() {
    console.log('ngOnInit', this.recipe);
  }

  showIngredients() {
    console.log('test', this.displayIngredient);
    this.displayIngredient = !this.displayIngredient;
  }

  showInstructions() {
    console.log('test', this.displayInstruction);
    this.displayInstruction = !this.displayInstruction;
  }

  removeRecipe() {
    console.log('Recipe', this.recipe);
   return this._recipeService.deleteRecipe(this.recipe).subscribe(() => this.myEventEmitter.emit(this.recipe));
  }

}
