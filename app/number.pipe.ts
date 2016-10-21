import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "number",
  pure: false
})

export class NumberPipe implements PipeTransform {
    transform(input: Meal[]) {
      var total = 0;
      for (var i = 0; i < input.length; i++) {
        total += input[i].calories;
      }
      return total;
    }
}
