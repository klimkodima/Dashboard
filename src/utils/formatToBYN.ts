import { Currency } from '../types';

export const formatToBYN = (price: string | undefined, currency: Currency | undefined): number => {
    if (price === undefined || currency === undefined) return 0;
    const arrayPrise = price.split(' ');
    switch (arrayPrise[1]) {
        case 'USD':
            return parseFloat(arrayPrise[0]) * parseFloat(currency.USD);
        case 'EUR':
            return parseFloat(arrayPrise[0]) * parseFloat(currency.EUR);
        default:
            return parseFloat(arrayPrise[0]);
    }
}