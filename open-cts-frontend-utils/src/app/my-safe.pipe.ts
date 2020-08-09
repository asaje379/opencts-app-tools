import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySafe'
})
export class MySafePipe implements PipeTransform {

  transform(value: {}, prop: string): any {
    return !value.hasOwnProperty(prop) ? '' : value[prop];
  }

}
