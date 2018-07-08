import { Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    //want to see if the words typed are prepositions. Put a few prepositions in the array
    let prepositions = [
      'of',
      'the',
      'to',
      'at',
      'a', 
      'and'
    ]

    let words = value.split(' ');
    for (var i = 0; i < words.length; i++) {
      //see if words is a preposition
      if (prepositions.includes(words[i])){
      //if word is preposition, make it all lowercase
        words[i] = words[i].toLowerCase();
      }
      //if word is NOT a preposition, make the first letter uppercase and the rest of the word lowercase
      else {
        words[i] = words[i].substr(0 ,1).toUpperCase() + words[i].substr(1).toLowerCase();
      }
    }

    return words.join(' ');
  }

}
