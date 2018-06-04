import { Pipe, PipeTransform } from '@angular/core';
import { House } from '../house.model';

@Pipe({
  name: 'filter'
})


    export class FilterPipe implements PipeTransform {
      transform( items: House[], args: string): any{

        if (items.length === 0 || args === '' ) {
          return items;
        }
        
        if (args && items.length > 0) {
          let itemsFound = items.filter(
            item => item.name && item.name.toLowerCase().includes(args.toLowerCase())
            || item.description && item.description.toLowerCase().includes(args.toLowerCase())
          );
          if (itemsFound && itemsFound.length > 0){
            return itemsFound;
          }
          //return[-1];
        }
        return items;
      }

  }