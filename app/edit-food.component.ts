import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <!-- to edit current foods -->
    <div class="row edit-foods">
      <div class="col-md-2"></div>
      <div *ngIf="childSelectedFood" class="form-horizontal col-md-8">
      <div class="form-group ">

        <h3 class= "edit-form-name">EDIT THIS SNACK</h3>
      </div>
        <div class="form-group">
        <label class="col-md-4 control-label">Name</label>
          <div class="col-md-4">
            <input class="form-control input-md" [(ngModel)]="childSelectedFood.name">
          </div>
        </div>
        <div class="form-group">
        <label class="col-md-4 control-label">Details:</label>
          <div class="col-md-4">
            <input class="form-control input-md" [(ngModel)]="childSelectedFood.details">
          </div>
        </div>
        <div class="form-group">
        <label class="col-md-4 control-label">Servings:</label>
          <div class="col-md-4">
            <input class="form-control input-md" [(ngModel)]="childSelectedFood.servings">
          </div>
        </div>
        <div class="form-group">
        <label class="col-md-4 control-label">Calories:</label>
          <div class="col-md-4">
            <input class="form-control input-md" [(ngModel)]="childSelectedFood.calories">
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-4"></div>
          <button class="col-md-4 btn btn-primary" (click)="hideEditFormClicked()">Done</button>
        </div>
        </div>
      </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() hideEditFormClickedSender = new EventEmitter();

  hideEditFormClicked() {
    this.hideEditFormClickedSender.emit();
  }
}
