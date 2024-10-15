import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  calculate(expression: string): string {
    try {
      return eval(expression);
    } catch (e) {
      return 'Error';
    }
  }
}
