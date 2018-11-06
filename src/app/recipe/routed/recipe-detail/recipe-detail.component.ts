import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';


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

  constructor() { }

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

}
