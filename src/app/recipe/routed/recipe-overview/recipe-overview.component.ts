import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.scss']
})
export class RecipeOverviewComponent implements OnInit {
  id: string;

  @Input()
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private _recipeService: RecipeService) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id', this.id);
   this._recipeService.getRecipe(this.id).subscribe(recipe => this.recipe = recipe);
  }
  ngOnInit() {
   // this._recipeService.getRecipe(this.id).subscribe(recipe => this.recipe = recipe);
  }
}
