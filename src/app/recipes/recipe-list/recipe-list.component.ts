import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First Recipe', 'just description',
    'https://www.wholesomeyum.com/wp-content/uploads/2019/09/wholesomeyum-keto-chaffles-recipe-sweet-savory-5-ways-24.jpg'),
    new Recipe('First Recipe', 'just description',
    'https://www.wholesomeyum.com/wp-content/uploads/2019/09/wholesomeyum-keto-chaffles-recipe-sweet-savory-5-ways-24.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
