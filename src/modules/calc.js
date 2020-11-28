
// калькулятор
const calc = () => {    
    const formCalc = document.querySelector('#cards .right'),
    timeInputs = formCalc.querySelectorAll('input[name="card-type"]'),
    priceTotal = formCalc.querySelector('#price-total'),
    promoInput = formCalc.querySelector('.price-message input'),
    promoCode = 'ТЕЛО2019';

    const cost = {
    mozaika: [1999, 9900, 13900, 19900],
    schelkovo: [2999, 14990, 21990, 24990]
    };

    let currentCost = cost.mozaika;
    priceTotal.textContent = currentCost[0];

    const totalOutput = () => {
        timeInputs.forEach((item, i) => {
            if (item.checked) {
                if (promoInput.value === promoCode) {
                priceTotal.textContent = Math.ceil(currentCost[i] * 0.7);
                } else {
                priceTotal.textContent = currentCost[i];
                }
            }
        });
    };

    promoInput.addEventListener('input', () => {
        totalOutput();
    });

    formCalc.addEventListener('click', (e) => {
        let target = e.target;
        if (target.matches('input[name="club-name"]')) {
            currentCost = cost[target.value];
            totalOutput();
        }

        if (target.matches('input[name="card-type"]')) {
            timeInputs.forEach((item) => {
                item.removeAttribute('checked');
                if (target === item) {
                target.setAttribute('checked', '');
                totalOutput();
                }
            });
        }
    });
}
export default calc