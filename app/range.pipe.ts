import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "range",
  pure: false
})

export class RangePipe implements PipeTransform {
    transform(input: Meal[], range) {
      var rangeArray = [];
      console.log(range);
      if (range !== "none") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].calories >= 500 && range === "500") {
          	console.log("INININININININ over the range");
            rangeArray.push(input[i]);
          } else if (range !== "500" && input[i].calories <= 500) {
          	rangeArray.push(input[i]);
          }
        }

        return rangeArray;
      }
      return input;
    }
}
