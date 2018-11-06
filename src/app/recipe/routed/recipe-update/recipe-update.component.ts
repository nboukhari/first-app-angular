import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../shared/recipe.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.scss']
})
export class RecipeUpdateComponent implements OnInit {
  id: string;
  recipeForm: FormGroup;

  @Input()
  recipe: Recipe;
  constructor(private _route: ActivatedRoute, private _router: Router, private _recipeService: RecipeService, private _fb: FormBuilder) {
    this.recipeForm = this._fb.group({
      name: [''],
      description: [''],
      picture: ['']
    });
   }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    console.log('id', this.id);
    this._recipeService.getRecipe(this.id).subscribe(recipe => {
      this.recipe = recipe;
      this.recipeForm.patchValue({
        name: recipe.name,
      description: recipe.description,
      picture: recipe.picture
      });
    });
  }

  getRecipeToUpdate() {
    console.log('name', this.recipeForm.get('name').value);
    console.log('description', this.recipeForm.get('description').value);
    console.log('picture', this.recipeForm.get('picture').value);
    this.recipe.name = this.recipeForm.get('name').value;
    this.recipe.description = this.recipeForm.get('description').value;
    this.recipe.picture = this.recipeForm.get('picture').value;
    this._recipeService.updateRecipe(this.recipe).subscribe(() => this._router.navigate(['recipes']));
  }

}
