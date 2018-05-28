import { Pipe, PipeTransform } from '@angular/core';
import { House } from '../house.model';

@Pipe({
  name: 'filter'
})

// export class FilterPipe implements PipeTransform {

//   transform(value: any, filterString: string, propName: string): any {
//     if (value.length === 0 || filterString === '' ) {
//       return value;
//     }

//     const resultArray = [];
//     for (const item of value) {
      
//       if (item[propName] === filterString) {
//         resultArray.push(item);
//       }
//     }

//       return resultArray;
//     } 
      

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
        return
      }

  }