
function calculateInterest() {
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let time = parseFloat(document.getElementById('time').value);

    let interest = principal * (rate / 100) * time;
    let total = principal + interest;

    let resultText = `With a beginning principal of $${principal} and with a growth rate of ${rate}% for ${time} years, your total interest will be $${interest.toFixed(2)} with a grand total of $${total.toFixed(2)}.`;
    document.getElementById('resultText').innerText = resultText;
}
