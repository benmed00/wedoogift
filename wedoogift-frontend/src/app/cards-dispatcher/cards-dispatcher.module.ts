import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

import { CardsDispatcherComponent } from './components/cards-dispatcher.component';
import { CardsCalculationService } from './services/api-calculation/cards-calculation.service';


@NgModule({
  declarations: [CardsDispatcherComponent],
  imports: [
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
  ],
  providers: [CardsCalculationService],
  exports: [CardsDispatcherComponent],
})
export class CardsDispatcherModule {}
