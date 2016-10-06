import { Component }from '@angular/core';

@Component({
  selector: 'stamp-duty-calc',
  template: `
    <div class="container">
      <h2>Basic Stamp Duty Land Tax Calculator</h2>
      <p class="well lead">Type in the price you want to calculator and press the Calculate button.</p>
      <input type="number" [value]="price" (input)="price = $event.target.value" />
      <button (click)="calcSDLT()" class="btn btn-primary btn-sm">Calculate</button>
      <p class="well lead">Value of SDLT is {{tax}}</p>
    </div>
    `
})
export class StampDutyCalculator {
  tax: number;
  price: number;

  constructor() {
      this.tax = 0;
      this.price = null;
  }

  calculateTaxLine(min: number, max: number, percent: number, price: number): number {
    console.log("min: " + min + "max: " + max + "percent: " + percent + "price: " + price); 
    var ratableValue = 0.0;
    if (price >= min) {
        if (max > 0 && price > max) {
            ratableValue = max - (min - 1);
        } else {
            ratableValue = price - (min - 1);
        }
    }
    console.log("ratableValue: " + ratableValue);
    return percent * ratableValue / 100.0;
  }

  calcSDLT() {
    this.tax = 
        this.calculateTaxLine(1, 125000, 0, this.price) +
        this.calculateTaxLine(125001, 250000, 1, this.price) +
        this.calculateTaxLine(250001, 500000, 3, this.price) +
        this.calculateTaxLine(500001, 1000000, 4, this.price) +
        this.calculateTaxLine(1000001, 2000000, 5, this.price) +
        this.calculateTaxLine(2000001, 0, 7, this.price);
  }
}