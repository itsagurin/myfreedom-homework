class CurrencyConverter {
    constructor() {
        this.amountInput = document.getElementById('amount');
        this.fromCurrency = document.getElementById('from-currency');
        this.toCurrency = document.getElementById('to-currency');
        this.convertedAmount = document.getElementById('converted-amount');
        this.exchangeRateDisplay = document.getElementById('exchange-rate');

        this.rates = {};

        // Добавляем слушатели событий
        this.amountInput.addEventListener('input', this.convert.bind(this));
        this.fromCurrency.addEventListener('change', this.convert.bind(this));
        this.toCurrency.addEventListener('change', this.convert.bind(this));
    }

    async fetchExchangeRates(baseCurrency) {
        try {
            const response = await fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`);
            const data = await response.json();

            if (data.result === 'success') {
                this.rates = data.rates;
                this.convert();
            } else {
                this.exchangeRateDisplay.textContent = 'Ошибка получения курса валют';
            }
        } catch (error) {
            this.exchangeRateDisplay.textContent = 'Не удалось загрузить курс валют';
            console.error('Ошибка:', error);
        }
    }

    convert() {
        const amount = parseFloat(this.amountInput.value) || 0;
        const from = this.fromCurrency.value;
        const to = this.toCurrency.value;

        if (this.rates[to]) {
            const convertedValue = amount * (this.rates[to] / this.rates[from]);

            this.convertedAmount.textContent = convertedValue.toFixed(2);

            const exchangeRate = this.rates[to] / this.rates[from];
            this.exchangeRateDisplay.textContent = `Курс: 1 ${from} = ${exchangeRate.toFixed(4)} ${to}`;
        }
    }

    init() {
        this.fetchExchangeRates('USD');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const converter = new CurrencyConverter();
    converter.init();
});