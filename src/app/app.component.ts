import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CalculationService } from './calculation.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class AppComponent implements OnInit {
  inputStr!: FormGroup;

  constructor(private calculationService: CalculationService) { }

  ngOnInit(): void {
    this.inputStr = new FormGroup({
      display: new FormControl('')
    });
  }

  buttonClick(event: any): void {
    const buttonText = event.target.textContent;
    const currentValue = this.inputStr.controls['display'].value;
    this.inputStr.controls['display'].setValue(currentValue + buttonText);
  }

  calculate(): void {
    const expression = this.inputStr.controls['display'].value;
    const result = this.calculationService.calculate(expression);
    this.inputStr.controls['display'].setValue(result);
  }

  clear(): void {
    this.inputStr.controls['display'].setValue('');
  }
}
