import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minsec0',
})
export class TimePipe implements PipeTransform {
  transform(secs: number, withZero: boolean = true): any {
    const minutes = secs / 60;
    const seconds = secs % 60;
    return !withZero
      ? `${Math.floor(minutes)}' ${seconds}''`
      : `${minutes < 10 ? '0' + Math.floor(minutes) : Math.floor(minutes)}' ${
          seconds < 10 ? '0' + seconds : seconds
        }''`;
  }
}
