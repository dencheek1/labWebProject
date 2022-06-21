import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { FoodCategory } from 'src/model/foodCategory';
import { FoodItemService } from 'src/services/FoodItemService';

@Component({
  selector: 'app-diery-search-block',
  templateUrl: './diery-search-block.component.html',
  styleUrls: ['./diery-search-block.component.scss']
})
export class DierySearchBlockComponent implements OnInit{

  foodCategory!:FoodCategory[];
  favoriteFoodCategory!:FoodCategory[];
  selectedType:string = "search";

  private _searchString:string = "";

  set searchString(string:string){
    console.log(string);
    this.filterFood(string);
    this._searchString = string;
  }
  get searchString(){
    return this._searchString;
  }
  differ:any;

  constructor(differs:  KeyValueDiffers, private foodService:FoodItemService) {
    this.differ = differs.find([]).create();
  }
  ngOnInit(): void {
    this.foodCategory = this.foodService.getAllCategories();
    this.favoriteFoodCategory = this.foodService.getAllFavoriteCategories(); 
    console.log(this.foodCategory)
  }

  filterFood(string:string){
    console.log
    this.foodCategory = this.foodService.getAllCategories();
    let temp:FoodCategory[] = [];
    if(string && string.length>0){this.foodCategory.forEach(cat =>(temp.push({items:cat.items.filter(item => item.name.toLocaleLowerCase().includes(string.toLocaleLowerCase())),name:cat.name,})));
    this.foodCategory = temp;}
    console.log(temp);
  }

  selectList(string:string){
    console.log(string);
    this.selectedType = string;
  }

}
