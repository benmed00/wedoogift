export interface CalculatorComponentValue {
  value: number;
  cards: number[];
}

export class CalculatorComponentValueClass implements CalculatorComponentValue {
  public value: number;
  public cards: number[];

  constructor() {
    this.value = 0;
    this.cards = [0, 0];
  }
}
