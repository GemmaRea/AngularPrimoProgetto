import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centimetri',
  standalone: true
})
export class CentimetriPipe implements PipeTransform {

  transform(value:number) {
    //trasdormazione per visualizzare altezza in cm
    return value *10 +"cm";
  }

}
