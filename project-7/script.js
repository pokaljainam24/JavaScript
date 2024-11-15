const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const tipPercentDisplay = document.getElementById('tipPercent');
const tipAmountDisplay = document.getElementById('tipAmount');
const totalAmountDisplay = document.getElementById('totalAmount');
const splitInput = document.getElementById('split');
const splitCountDisplay = document.getElementById('splitCount');
const billEachDisplay = document.getElementById('billEach');
const tipEachDisplay = document.getElementById('tipEach');

function calculate() {
    const bill = parseFloat(billInput.value);
    const tipPercent = parseInt(tipInput.value);
    const split = parseInt(splitInput.value);

    // Ensure inputs are valid
    if (!isNaN(bill) && bill > 0 && !isNaN(tipPercent) && tipPercent >= 0 && !isNaN(split) && split > 0) {
        
        const tipAmount = (bill * tipPercent) / 100;
        const totalAmount = bill + tipAmount;
        const billEach = totalAmount / split;
        const tipEach = tipAmount / split;

        tipPercentDisplay.textContent = `${tipPercent}%`;
        tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
        totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
        splitCountDisplay.textContent = `${split} people`;
        billEachDisplay.textContent = `$${billEach.toFixed(2)}`;
        tipEachDisplay.textContent = `$${tipEach.toFixed(2)}`;
    } else {
        tipPercentDisplay.textContent = '0%';
        tipAmountDisplay.textContent = '$0.00';
        totalAmountDisplay.textContent = '$0.00';
        splitCountDisplay.textContent = '0 people';
        billEachDisplay.textContent = '$0.00';
        tipEachDisplay.textContent = '$0.00';
    }
}

billInput.addEventListener('input', calculate);
tipInput.addEventListener('input', calculate);
splitInput.addEventListener('input', calculate);

calculate();
