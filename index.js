


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
    let balance = document.getElementById('balance-amount');
    document.getElementById('deposit-amount').innerHTML = values.deposit;
    values.balance = parseFloat(values.balance) + parseFloat(depositInput.value);
    balance.innerHTML = values.balance;
    depositInput.value = '';
})

depositInput.addEventListener('change', (e) => {
        const amount = parseFloat(e.target.value);
        values.deposit += amount;
})

// Withdraw --------


const widthdrawBtn = document.getElementById('withdraw-btn');

const withdrawInput= document.getElementById('withdraw-input');

withdrawInput.addEventListener('change', (e) => {
    const amount = parseFloat(e.target.value);
    if(amount > values.balance || values.balance == 0){
        widthdrawBtn.disabled = true;
        alert('Insufficient balance!');
    }else {
        values.widthdraw += amount;
        widthdrawBtn.disabled = false;
    }
})



widthdrawBtn.addEventListener('click', () => {
    let balance = document.getElementById('balance-amount');
    document.getElementById('withdraw-amount').innerHTML = values.widthdraw;
    values.balance -= withdrawInput.value;
    balance.innerHTML = values.balance;
    withdrawInput.value = '';
})