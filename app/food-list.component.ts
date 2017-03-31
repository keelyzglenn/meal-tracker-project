import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allFoods" selected="selected">All Tasks</option>
      <option value="lowCalories">Low Calories</option>
      <option value="highCalories" >High Calories</option>
    </select>
  <!--to view list-->
  <p *ngFor="let food of childFoodList | calories:filterByCalories" (click)='showFood(food)'>{{food.name}}
  <button (click)='editFoodClicked(food)'>Edit</button>
  </p>

  <!-- to show details of food -->
  <div *ngIf="showFoodDetails">
  <p>Name: {{showFoodDetails.name}}</p>
  <p>Details: {{showFoodDetails.details}}</p>
  <p>Servings: {{showFoodDetails.servings}}</p>
  <p>Calories: {{showFoodDetails.calories}}</p>
  <button (click)="hideFoodDetails()">Done</button>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  editFoodClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  // show details
    showFoodDetails = null;

    showFood(clickedFood) {
      this.showFoodDetails = clickedFood;
    }

    hideFoodDetails() {
      this.showFoodDetails = null;
    }

    // select drop down
    filterByCalories: string = "allFoods"

    onChange(optionFromMenu) {
      this.filterByCalories = optionFromMenu;
    }

}
