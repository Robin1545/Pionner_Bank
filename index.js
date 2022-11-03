


const btn = document.getElementById('login-btn');

btn.addEventListener('click', function (e) {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    const mainArea = document.getElementById('main-area');
    mainArea.style.display = 'block';
})



// deposit --------

const values = {
    deposit : parseFloat(document.getElementById('deposit-amount').innerHTML),
    widthdraw : parseFloat(document.getElementById('withdraw-amount').innerHTML),
    balance : parseFloat(document.getElementById('balance-amount').innerHTML)
}

const depositBtn = document.getElementById('deposit-btn');

const depositInput = document.getElementById('deposit-input');

depositBtn.addEventListener('click', () => {
    document.getElementById('deposit-amount').innerHTML = values.deposit;
    values.balance -= depositInput.value;
    document.getElementById('balance-amount').innerHTML = values.balance;
    depositInput.value = '';
})

depositInput.addEventListener('change', (e) => {
        const amount = parseFloat(e.target.value);
        values.deposit += amount;
})

// Withdraw --------


const withdrawInput= document.getElementById('withdraw-input');


withdrawInput.addEventListener('change', (e) => {
    const amount = parseFloat(e.target.value);
    values.widthdraw += amount;
})

const widthdrawBtn = document.getElementById('withdraw-btn');


widthdrawBtn.addEventListener('click', () => {
    document.getElementById('withdraw-amount').innerHTML = values.widthdraw;
    values.balance -= withdrawInput.value;
    document.getElementById('balance-amount').innerHTML = values.balance;
    withdrawInput.value = '';
})