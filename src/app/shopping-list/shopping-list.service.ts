import {EventEmitter} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<IngredientModel[]>();
  private ingredients: IngredientModel[] = [
    // new IngredientModel('Apples', 5),
    // new IngredientModel('Tomato', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.length = 0; // empty the array
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

}
