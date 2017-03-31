import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `

  <!--to view list-->
  <p *ngFor="let food of childFoodList" (click)='showFood(food)'>{{food.name}}
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

}
