import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="row">
    <div class='col-md-4'>
      <h3>Total Calories: {{childMealList | range:selectedRange | number}}</h3>
    </div>
    <div class="col-md-4">
      <div class="form-group">
        <label>Filter By Calories</label>
        <select class="form-control" (change)="onChangeRange($event.target.value)">
          <option value="none">none</option>
          <option value="499">less then 500</option>
          <option value="500">Over 500</option>
        </select>
      </div>
    </div>
    <div class="col-md-4">
      <button class="btn btn-info btn-lg" data-toggle="modal" data-target="#newMeal">Add Meal</button>
    </div>
   </div>

   <div class="row">
      <div *ngFor="let currentMeal of childMealList | range:selectedRange" class="col-md-4">
        <div class="well">
          <h3>{{ currentMeal.name }} <i class="fa fa-anchor" aria-hidden="true"></i></h3>
          <p>{{ currentMeal.details }}</p>
          <ul>
            <li>Calories: {{ currentMeal.calories }}</li>
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
  @Output() editSender = new EventEmitter();
  public selectedRange = "none";
  public total = null;
  editButtonHasBeenClicked(MealToEdit: Meal) {
    this.editSender.emit(MealToEdit);
  }

  onChangeRange(optionFromMenu) {
    this.selectedRange = optionFromMenu;
  }
}
