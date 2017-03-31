import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Food Tracker</h1>
  <h3>{{month}}/{{day}}/{{year}}</h3>

  <food-list [childFoodList]="masterFoodsList" (clickSender)="editFood($event)"></food-list>

  <edit-food [childSelectedFood]="selectedFood" (hideEditFormClickedSender)="hideEditForm()"></edit-food>

  <new-food (newFoodSender)="addFood($event)"></new-food>



  `
})

export class AppComponent {
// date
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

// food list
masterFoodsList: Food[] = [
  new Food('Bagel', 'plain', 1,	150),
  new Food('Kelloggs Raisin Bran', 'cereal', 3/4,	120),
  new Food('Oatmeal', 'cooked', 1,	132),
  new Food('Oreos', 'chocolate', 15, 750),
  new Food('Wheat Thins', 'gross', 8, 70),
  new Food('Iced cinnamon roll', 'Pillsbury', 1, 110)
  ];


// edit foods
  selectedFood = null;

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  hideEditForm() {
    this.selectedFood = null;
  }

  // add new food
  addFood(newFoodFromChild: Food) {
    this.masterFoodsList.push(newFoodFromChild);
  }

}
