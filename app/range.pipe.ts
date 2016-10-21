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
            rangeArray.push(input[i]);
          } else if (range !== "500" && input[i].calories <= 500) {
          	rangeArray.push(input[i]);
          }
        }

        rangeArray.sort(function(ob1, ob2) {
        	if (ob1.calories > ob2.calories) {
		      return 1;
		    } else if (ob1.calories < ob2.calories) { 
		      return -1;
		    }

		    if (ob1.name < ob2.name) { 
		      return -1;
		    } else if (ob1.name > ob2.name) {
		       return 1
		    } else { 
		      return 0;
		    }
        });

        return rangeArray;
      }
      return input;
    }
}
