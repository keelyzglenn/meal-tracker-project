import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <div ng-show="addFood">
    <h2>New Food</h2>
    <label>Name:</label>
    <input #newName>
    <label>Details:</label>
    <input #newDetails>
    <label>Servings:</label>
    <input #newServings>
    <label>Calories:</label>
    <input #newCalories>
    <button class="btn btn-primary" (click)="submitForm(newName.value, newDetails.value, newServings.value, newCalories.value); newName.value=''; newDetails.value=''; newServings.value=''; newCalories.value='';">Add</button>
    </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  submitForm(name: string, details: string, servings: number, calories: number) {
    var newFoodToAdd: Food = new Food(name, details, servings, calories);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
