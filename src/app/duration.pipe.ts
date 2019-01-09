import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const chunks =  value.substr(2, value.length  -  1).split('M');
    return chunks[0] + ' Minutes ' + chunks[1].substr(0, chunks[1].length - 1 ) + ' Seconds';
  }

}
