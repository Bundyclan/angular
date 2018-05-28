import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '' ) {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }

      return resultArray;
    } 
      


    //teacher's search, not working for this either

    // export class FilterPipe implements PipeTransform {
    //   transform( items: House[], args: string): any{
    //     if (args && items.length > 0) {
    //       let itemsFound = items.filter(
    //         item => item.name && item.description.toLowerCase().includes(args.toLowerCase())
    //         || item.description && item.description.toLowerCase().includes(args.toLowerCase())
    //       );
    //       if (itemsFound && itemsFound.length > 0){
    //         return itemsFound;
    //       }
    //       return[-1];
    //     }
    //     return
    //   }

  }