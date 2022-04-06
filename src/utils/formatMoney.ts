export const formatMoney = (money: number): string | number => {
    if (money === 0) return 0;
    return money.toFixed(1);
}