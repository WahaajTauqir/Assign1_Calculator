import { Injectable } from '@angular/core';
import { evaluate } from 'mathjs';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  calculate(expression: string): string {
    try {
      return evaluate(expression).toString();
    } catch (e) {
      return 'Error';
    }
  }
}
