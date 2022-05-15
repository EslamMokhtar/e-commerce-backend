const rates: Record<string, number> = {
    USD: 1.052644,
    GBP: 0.859865,
    AUD: 1.516727,
    JPY: 136.57275,
    RUB: 70.285595
}

const symbols = ['$', '£', 'A$', '¥', '₽'];

const currencyConverter = {
    availableCurrencies: Object
        .keys(rates)
        .map((label, i) => ({
            label,
            symbol: symbols[i]
        })),

    convertFromEUR(amount: number, targetCurrency: string) {
        return rates[targetCurrency] * amount;
    }
}

export default currencyConverter;
