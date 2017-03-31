import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Food Tracker</h1>
  <h3>{{month}}/{{day}}/{{year}}</h3>

  <!--to view list-->
  <li *ngFor="let food of foods" (click)='showFood(food)'>{{food.name}}
  </li>

  <!-- to show details of food -->
  <div *ngIf="showFoodDetails">
  <p>Name: {{showFoodDetails.name}}</p>
  <p>Details: {{showFoodDetails.details}}</p>
  <p>Servings: {{showFoodDetails.servings}}</p>
  <p>Calories: {{showFoodDetails.calories}}</p>
  </div>

  `
})

export class AppComponent {
// date
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

// food list
foods: Food[] = [
  new Food('Bagel', 'plain', 1,	150),
  new Food('Kelloggs Raisin Bran', 'cereal', 3/4,	120),
  new Food('Oatmeal', 'cooked', 1,	132),
  new Food('Oreos', 'chocolate', 1, 50),
  new Food('Wheat Thins', 'gross', 8, 70),
  new Food('Iced cinnamon roll', 'Pillsbury', 1, 110)
  ];

// showdetails
  showFoodDetails = null;

  showFood(clickedFood) {
    this.showFoodDetails = clickedFood;
  }

  hideFoodDetails() {
    this.showFoodDetails = null;
  }


}


export class Food {
  constructor(public name: string, public details: string, public servings: number, public calories: number) {}
}
