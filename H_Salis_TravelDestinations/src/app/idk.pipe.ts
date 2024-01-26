import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idk',
  standalone: true
})
export class IdkPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
