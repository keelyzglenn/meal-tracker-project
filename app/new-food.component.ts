import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <div class="row new-foods">
    <div class="col-md-3"></div>
    <div ng-show="addFood" class="form-horizontal new-food-form col-md-6">
    <div class="form-group ">

      <h3 id= "form-name">ADD YOUR LATEST SNACK</h3>
    </div>
      <div class="form-group">
      <label class="col-md-4 control-label">Name</label>
        <div class="col-md-4">
          <input class="form-control input-md" #newName>
        </div>
      </div>
      <div class="form-group">
      <label class="col-md-4 control-label">Details:</label>
        <div class="col-md-4">
          <input class="form-control input-md" #newDetails>
        </div>
      </div>
      <div class="form-group">
      <label class="col-md-4 control-label">Servings:</label>
        <div class="col-md-4">
          <input class="form-control input-md" #newServings>
        </div>
      </div>
      <div class="form-group">
      <label class="col-md-4 control-label">Calories:</label>
        <div class="col-md-4">
          <input class="form-control input-md" #newCalories>
        </div>
      </div>

      <div class="form-group">
        <div class="col-md-4"></div>
        <button class="col-md-4 btn btn-primary" (click)="submitForm(newName.value, newDetails.value, newServings.value, newCalories.value); newName.value=''; newDetails.value=''; newServings.value=''; newCalories.value='';">Add</button>
      </div>


      </div>
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
