import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CalculatorComponentValue, CalculatorComponentValueClass } from '../../shared/models/calculator-component-value';
import { CardsCalculationService } from '../services/api-calculation/cards-calculation.service';

@Component({
  selector: 'app-cards-dispatcher',
  templateUrl: './cards-dispatcher.component.html',
  styleUrls: ['./cards-dispatcher.component.css'],
})
export class CardsDispatcherComponent implements OnInit {
  @Output() public returnAmount: EventEmitter<number> =
    new EventEmitter<number>();

  public equal: CalculatorComponentValueClass | null;
  public floor: CalculatorComponentValueClass;
  public ceil: CalculatorComponentValueClass;

  public result: CalculatorComponentValueClass =
    new CalculatorComponentValueClass();

  public shopId: number = 5;
  public limitError: string = '';

  public cardsCalculatorForm: FormGroup = new FormGroup({
    value: new FormControl('', [Validators.required, Validators.maxLength(2)]),
  });

  constructor(
    private fb: FormBuilder,
    private calculatorService: CardsCalculationService
  ) {}

  public ngOnInit(): void {
    this.initializeVariables();
    this.cardsCalculatorForm = this.fb.group({
      value: '',
    });
  }

  private initializeVariables(): void {
    this.result.cards = [];
    this.floor = new CalculatorComponentValueClass();
    this.ceil = new CalculatorComponentValueClass();
    this.equal = new CalculatorComponentValueClass();
    this.limitError = '';
  }

  public getResult(): void {
    this.initializeVariables();
    if (this.result.value) {
      this.calculatorService
        .updateCardsCount(this.shopId, this.result.value)
        .subscribe((value) => {
          if (value.equal) {
            this.changeAmount(value.equal);
          } else {
            this.equal = null;
            if (!value.floor) {
              this.changeAmount(value.ceil);
              this.limitError = 'min';
            } else if (!value.ceil) {
              this.changeAmount(value.floor);
              this.limitError = 'max';
            }
          }
          this.floor = value.floor;
          this.ceil = value.ceil;
        });
    } else {
      this.cardsCalculatorForm.get('value')?.setErrors({ empty: true });
    }
  }

  public changeAmount(value: CalculatorComponentValue): void {
    this.equal = value;
    this.result = value;
    this.returnAmount.emit(this.result.value);
  }

  public nextAmount(): void {
    this.result.value = this.result.value + 1;
    this.getResult();
  }

  public previousAmount(): void {
    this.result.value = this.result.value - 1;
    this.getResult();
  }
}


