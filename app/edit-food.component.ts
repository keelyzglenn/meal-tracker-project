import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <!-- to edit current foods -->
    <div *ngIf="childSelectedFood">
      <h3>Edit Food</h3>
      <label>Name:</label>
      <input [(ngModel)]="childSelectedFood.name">
      <label>Details::</label>
      <input [(ngModel)]="childSelectedFood.details">
      <label>Servings:</label>
      <input [(ngModel)]="childSelectedFood.servings">
      <label>Calories:</label>
      <input [(ngModel)]="childSelectedFood.calories">
       <button (click)="hideEditFormClicked()">Done</button>
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
