import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './Meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div class="modal fade" id="newMeal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">New Meal</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Enter Meal name:</label>
              <input class="form-control" #newName>
            </div>
            <div class="form-group">
              <label>Enter Meal Details:</label>
              <textarea class="form-control" #newDetails></textarea>
            </div>
            <div class="form-group">
              <label>Enter Meal Calories:</label>
              <input class="form-control" pattern="[0-9]" #newCalories>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="
              addClicked(newName.value, newDetails.value, newCalories.value);
              newName.value='';
              newDetails.value='';
              newCalories.value='';
            ">Add</button>
          </div>
        </div>
      </div>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calories: string) {
    var newMealToAdd: Meal = new Meal(name, details, parseInt(calories));
    this.newMealSender.emit(newMealToAdd);
  }
}
