document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('https://open.er-api.com/v6/latest/RUB');
    const data = await res.json();
    const rate = data.rates.USD;

    const rateDisplay = document.getElementById('currency-rate-display');
    document.querySelectorAll('.price, .product-price').forEach(el => {
        const rub = parseInt(el.textContent.replace(/\D/g, ''));
        if (rub) {
            const usd = Math.round(rub * rate);
            el.insertAdjacentHTML('afterend', `<small>≈ ${usd} $</small>`);
        }
    });
});