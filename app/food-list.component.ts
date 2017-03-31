import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div class= "row">
    <select (change)="onChange($event.target.value)">
      <option value="allFoods" selected="selected">All Tasks</option>
      <option value="lowCalories">Low Calories</option>
      <option value="highCalories" >High Calories</option>
    </select>
  </div>
  <!--to view list-->
  <div class="row">

  </div>

  <div class="container">
  <h2>Food Log</h2>
  <div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td> <p *ngFor="let food of childFoodList | calories:filterByCalories" (click)='showFood(food)'>{{food.name}} <button class="food-buttons" (click)='editFoodClicked(food)'>Edit</button></p></td>
      </tr>
    </tbody>
  </table>
  </div>
</div>


  <!-- to show details of food -->
  <div class="row food-details">
  <div *ngIf="showFoodDetails">
  <div><label>Name: </label>
  {{showFoodDetails.name}}</div>
  <div><label>Details: </label>
  {{showFoodDetails.details}}</div>
  <div><label>Servings: </label>
  {{showFoodDetails.servings}}</div>
  <div><label>Calories: </label>
  {{showFoodDetails.calories}}</div>
  <button (click)="hideFoodDetails()">Done</button>
  </div>
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
