import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Food Tracker</h1>
  <h3>{{month}}/{{day}}/{{year}}</h3>

  <!--to view list-->
  <li *ngFor="let food of foods">{{food.name}}</li>
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
}


export class Food {
  constructor(public name: string, public details: string, public servings: number, public calories: number) {}
}
