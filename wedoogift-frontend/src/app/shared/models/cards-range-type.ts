export type keyCombination = 'equal' | 'floor' | 'ceil';

export type CardsRangeType = {
  [key in keyCombination]: {
    value: number;
    cards: Array<number>;
  };
};
