export const formatMoney = (money: number): string | number => {
    if (!money) return 0;
    if (money === 0) return 0;
    return money.toFixed(1);
}