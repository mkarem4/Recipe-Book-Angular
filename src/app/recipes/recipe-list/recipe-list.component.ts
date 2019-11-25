import {Component, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Test Recipe', 'this is my first test', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
