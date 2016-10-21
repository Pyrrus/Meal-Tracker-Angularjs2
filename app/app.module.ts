import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealListComponent } from './list-meal.component';
// import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
// import { RangePipe } from './Range.pipe'; // import our pipe here

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    // EditMealComponent,
    NewMealComponent, 
    // RangePipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
