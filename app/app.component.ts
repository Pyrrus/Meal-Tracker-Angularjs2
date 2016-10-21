import { Component } from '@angular/core';
import { Meal } from './Meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Maz Kanata Meal list</h1>
      <meal-list
        [childMealList]="masterMealList"
        (clickSender)="showDetails($event)"
       ></meal-list>
      
    <button class="btn btn-info btn-lg" data-toggle="modal" data-target="#newMeal">Add Meal</button>
    <br />
    <br />
  </div>

  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal("Fish and chip", "Eat all of it", 1200),
      new Meal("Wall done T-Bone", "bit over cock", 430),
      new Meal("Ham sandwiche", "It is ok", 200)
  ];

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finished() {
    this.selectedMeal = null;
  }

  addRest(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }

  showReview(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
}
