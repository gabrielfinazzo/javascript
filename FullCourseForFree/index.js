
const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const MasterCardBtn = document.getElementById('masterCardBtn');
const payPalBtn = document.getElementById('payPalBtn');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

mySubmit.onclick = function() {
    if(myCheckBox.checked) {
        subResult.textContent = `You are subscribed!`;
    } else {
        subResult.textContent = `You are NOT subscribed!`; 
    }

    if(visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visa`;
    } else if(MasterCardBtn.checked) {
        paymentResult.textContent = `You are paying with Master Card`
    } else if(payPalBtn.checked) {
        paymentResult.textContent = `You are paying with Pay Pal`
    } else {
        paymentResult.textContent = `You must select a payment type`
    }
}