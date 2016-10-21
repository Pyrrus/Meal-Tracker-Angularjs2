import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="row">
    <div class="col-md-3">
      <div class="form-group">
        <label>Filter By Price</label>
        <select class="form-control" (change)="onChangePrice($event.target.value)">
          <option value="none">none</option>
          <option value="low">Low to High</option>
          <option value="high">High to low</option>
        </select>
      </div>
    </div>
   </div>

   <div class="row">
      <div *ngFor="let currentMeal of childMealList" class="col-md-4">
        <div class="well">
          <h3>{{ currentMeal.name }} <i class="fa fa-anchor" aria-hidden="true"></i></h3>
          <ul>
            <li>{{ currentMeal.cetails }}</li>
            <li>{{ currentMeal.calories }}</li>
          </ul>
          <!-- Button trigger modal -->
          <button (click)="editButtonHasBeenClicked(currentMeal)" class="btn btn-info btn-lg" data-toggle="modal" data-target="#edit">Edit</button>
        </div>
      </div>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  @Output() clickSender2 = new EventEmitter();
  public selectedAlpha = "none";
  public total = null;
  editButtonHasBeenClicked(MealToEdit: Meal) {
    this.clickSender.emit(MealToEdit);
  }

  reviewButtonHasBeenClicked(MealToReview: Meal) {
    this.clickSender2.emit(MealToReview);
  }

}
