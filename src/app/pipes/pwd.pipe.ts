import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pwd'
})
export class PwdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'hello';
  }

}
