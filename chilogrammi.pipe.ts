import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chilogrammi',
  standalone: true
})
export class ChilogrammiPipe implements PipeTransform {

  transform(value:number) {
    return value/10 +"kg";
  }

}
