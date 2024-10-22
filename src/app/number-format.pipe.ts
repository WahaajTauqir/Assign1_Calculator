import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
  standalone: true
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
