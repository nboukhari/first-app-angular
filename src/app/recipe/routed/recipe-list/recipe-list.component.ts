import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  animations: [ trigger('explainerAnim', [
    transition('* => *', [
      query('.col', style({ opacity: 0, transform: 'translateX(-40px)' })),

      query('.col', stagger('500ms', [
        animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ])),

      query('.col', [
        animate(1000, style('*'))
      ])
    ])
  ])]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private _recipeService: RecipeService) {
    this._recipeService.getRecipies().subscribe(recipes => this.recipes = recipes);
  }

  ngOnInit() {
    console.log('ngOnInit', this.recipes);
  }

  myEventEmitter(recipe: Recipe) {
    console.log('myEventEmitter');
    // console.log(this.recipes.indexOf(recipe));
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
