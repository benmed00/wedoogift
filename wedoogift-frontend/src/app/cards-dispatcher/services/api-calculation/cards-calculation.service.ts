import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardsRangeType } from '../../../shared/models/cards-range-type';

@Injectable({
  providedIn: 'root',
})
export class CardsCalculationService {
  constructor(protected http: HttpClient) {}

  /**
   * Path part for operation search-combination
   */
  static readonly ApiSearchCombination =
    'http://localhost:3000/shop/5/search-combination?amount=';

  /**
   * Call calculator result
   * @param {number} shopId
   * @param {number} amount
   * @returns {Observable<any>} equal / floor / ceil values
   */
  public updateCardsCount(
    shopId: number,
    amount: number
  ): Observable<CardsRangeType> {
    return this.http.get(
      '/shop/' + shopId + '/search-combination?amount=' + amount
    ) as Observable<CardsRangeType>;
  }
}
