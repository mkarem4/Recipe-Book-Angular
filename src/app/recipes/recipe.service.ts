import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken & freekeh chopped salad with salsa verde',
      // tslint:disable-next-line:max-line-length
      'An easy, throw together salad that uses up leftover roast chicken. This wholesome dish is packed with crunchy vegetables to make up 2 of your 5-a-day',
      // tslint:disable-next-line:max-line-length
      'https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/04/chicken_freekeh_chopped_salad_with_leftover_salsa_verde.jpg',
      [
        new Ingredient('freekeh', 200),
        new Ingredient('tbsp olive oil', 3),
        new Ingredient('bay leaf', 1),
        new Ingredient('garlic clove crushed', 1),
        new Ingredient('asparagus spears - chopped', 4),
        new Ingredient('juice ½ lemon', 0.5),
        new Ingredient('spring onions - chopped', 4),
        new Ingredient('celery sticks - chopped', 2),
        new Ingredient('cucumber', 0.5),
        new Ingredient('avocado cubed', 1),
        new Ingredient('green chilli - deseeded and finely sliced', 1),
        new Ingredient('radishes - halved', 6),
        new Ingredient(' small pack flat-leaf parsley', 0.5),
        new Ingredient('small pack basil', 0.5),
      ]),
    new Recipe('Coffee ice cream terrine',
      // tslint:disable-next-line:max-line-length
      'Try this twist on a favourite childhood ice-cream dessert with coffee and chocolate layers. Made with just five ingredients, it\'s a great make-ahead pud ',
      'https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2019/07/coffee_terrine.jpg',
      [
        new Ingredient('coffee ice cream', 300),
        new Ingredient('vanilla ice cream', 300),
        new Ingredient('tbsp vegetable oil - for the tin', 1),
        new Ingredient('dark chocolate - roughly chopped', 300),
        new Ingredient('coconut oil', 500),
        new Ingredient('honeycomb or Maltesers - crushed', 50),
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
