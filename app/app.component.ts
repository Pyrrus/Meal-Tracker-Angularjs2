import { Component } from '@angular/core';
import { Meal } from './Meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="jumbotron">
    <h1>Meal Tracker list</h1>
  </div>
  <div class="container">
    <meal-list
      [childMealList]="masterMealList"
      (editSender)="showDetails($event)"
     ></meal-list>
    <new-meal
      (newMealSender)="addMeal($event)"
    ></new-meal>
    <edit-meal
      [editMeal]="selectedMeal"
      (doneSender)="finished()"
    ></edit-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal("Wall done T-Bone", "bit over cock", 430),
      new Meal("P&B sandwich", "It is ok", 200),
      new Meal("Ham sandwich", "It is ok", 200),
      new Meal("Fish and chip", "Eat all of it", 1200),
  ];

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finished() {
    this.selectedMeal = null;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
