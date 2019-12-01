import {EventEmitter, Injectable} from '@angular/core';
import {RecipeModel} from './recipe.model';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();

  private recipes: RecipeModel[] = [
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Konafa with Mango',
      'This Konafa with Mango is delicious and amazing.',
      'http://www.cairowestmag.com/wp-content/uploads/2018/09/Mango-konafa.jpg'
      , [
        new IngredientModel('konafa', 1),
        new IngredientModel('mango', 2)
      ]),
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Harissa-crumbed fish with lentils & peppers',
      'This smoky cod dish makes a great midweek meal – it\'s quick, low calorie and made in just one pan, which saves on washing up ',
      // tslint:disable-next-line:max-line-length
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/11/harissa-crumbed-fish-with-lentils-peppers.jpg?itok=2OuC_rVk',
      [
        new IngredientModel('pouches cooked Puy lentils', 200),
        new IngredientModel('jar roasted red peppers, drained and torn into chunks', 200),
        new IngredientModel('black olives, from a jar, roughly chopped', 50),
        new IngredientModel('zested and cut into wedges, Lemon', 1),
        new IngredientModel('tbsp olive or rapeseed oil', 3),
        new IngredientModel('cod fillets', 140),
        new IngredientModel('fresh breadcrumbs', 100),
        new IngredientModel('tbsp harissa', 1),
        new IngredientModel('small pack flat-leaf parsley, chopped', 0.5),
      ]),
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Sausage, kale & gnocchi one-pot',
      // tslint:disable-next-line:max-line-length
      'Plate up this delicious one-pot of sausage, kale and gnocchi in just 20 minutes, with just five minutes prep. Midweek suppers never got so easy – or tasty!',
      // tslint:disable-next-line:max-line-length
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/10/sausage-kale-gnocchi-one-pot.jpg?itok=4syTcwru',
      [
        new IngredientModel('tbsp olive oil', 1),
        new IngredientModel('pork sausages', 6),
        new IngredientModel('tsp chilli flakes', 1),
        new IngredientModel('tsp fennel seeds -optional-', 1),
        new IngredientModel('fresh gnocchi', 500),
        new IngredientModel('fresh chicken stock', 500),
        new IngredientModel('chopped kale', 100),
        new IngredientModel('parmesan - finely grated', 40),

      ]),
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Broccoli pasta shells',
      // tslint:disable-next-line:max-line-length
      'Kids will love this healthier take on pesto and pasta, with broccoli upping their veg intake. It takes just 20 minutes to make and is low in calories',
      // tslint:disable-next-line:max-line-length
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/04/broccoli-pasta-shells.jpg?itok=XuHD9oWZ',
      [
        new IngredientModel('head of broccoli - chopped into florets', 1),
        new IngredientModel('garlic clove - unpeeled', 1),
        new IngredientModel('tbsp olive oil', 2),
        new IngredientModel('pasta shells', 250),
        new IngredientModel('small pack parsley', 0.5),
        new IngredientModel('small pack basil', 0.5),
        new IngredientModel('toasted pine nuts', 30),
        new IngredientModel('zested and juiced - lemon', 0.5),
        new IngredientModel('parmesan', 30),
      ]),
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.slService.addIngredients(ingredients);
  }
}
