// import {Component, OnInit} from '@angular/core';
// import {FormGroup, FormControl} from '@angular/forms';
// import {ReactiveFormsModule} from '@angular/forms';
//
// @Component({
//   selector: 'app-calculator',
//   templateUrl: './calculator.component.html',
//   styleUrl: './calculator.component.css',
//   imports: [
//     ReactiveFormsModule
//   ],
//   standalone: true
// })
// export class CalculatorComponent implements OnInit {
//
//   inputStr: any
//
//   ngOnInit(): void {
//     this.inputStr = new FormGroup({
//       text : new FormControl()
//     })
//   }
//
//   buttonClick(buttonElement: any){
//     let buttonText = buttonElement.textContent
//     this.inputStr.controlls.text.setValue(buttonText)
//   }
// }
//

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div>
      <button (click)="showText()">Click Me</button>
      <input type="text" [value]="inputText" readonly />
    </div>
  `,
  styles: [`
    div {
      margin-top: 20px;
    }
    button {
      margin-right: 10px;
    }
  `]
})
export class AppComponent {
  inputText: string = '';

  showText(): void {
    this.inputText = 'Button clicked!';
  }
}

// Bootstrap the standalone component
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));



