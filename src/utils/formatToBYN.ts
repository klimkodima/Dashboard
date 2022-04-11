import { CurrencyType, Currency } from '../types';

export const formatToBYN = (price: string | undefined, currency: CurrencyType | undefined): number => {
    if (price === undefined || currency === undefined) return 0;
    const arrayPrise = price.split(' ');
    switch (arrayPrise[1]) {
        case Currency.USD:
            return parseFloat(arrayPrise[0]) * parseFloat(currency.USD);
        case Currency.EURO:
            return parseFloat(arrayPrise[0]) * parseFloat(currency.EUR);
        default:
            return parseFloat(arrayPrise[0]);
    }
};