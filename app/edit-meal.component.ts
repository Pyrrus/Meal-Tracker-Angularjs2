import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">Edit Meal</h4>
          </div>
          <div class="modal-body">
            <div *ngIf="editMeal">
              <h1>Edit {{editMeal.name}}</h1>
              <div>
                <div class="form-group">
                  <label>Edit Name</label>
                  <input class="form-control" type="text" [(ngModel)]="editMeal.name" />
                </div>
                <div class="form-group">
                  <label>Edit Details</label>
                  <textarea class="form-control" [(ngModel)]="editMeal.details"></textarea>
                </div>
                <div class="form-group">
                  <label>Edit Calories</label>
                  <input class="form-control" type="number" pattern="[0-9]" [(ngModel)]="editMeal.calories" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() editMeal: Meal;
  @Output() doneSender = new EventEmitter();
  doneClicked() {
    this.doneSender.emit();
  }
}
