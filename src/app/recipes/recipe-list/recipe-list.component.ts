import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Harissa-crumbed fish with lentils & peppers', 'This smoky cod dish makes a great midweek meal – it\'s quick, low calorie and made in just one pan, which saves on washing up ', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/11/harissa-crumbed-fish-with-lentils-peppers.jpg?itok=2OuC_rVk'),
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Sausage, kale & gnocchi one-pot', 'Plate up this delicious one-pot of sausage, kale and gnocchi in just 20 minutes, with just five minutes prep. Midweek suppers never got so easy – or tasty!', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/10/sausage-kale-gnocchi-one-pot.jpg?itok=4syTcwru'),
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Broccoli pasta shells', 'Kids will love this healthier take on pesto and pasta, with broccoli upping their veg intake. It takes just 20 minutes to make and is low in calories', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/04/broccoli-pasta-shells.jpg?itok=XuHD9oWZ'),
  ];
  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe);
  }

}
