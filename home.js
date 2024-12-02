document.getElementById('cashInBtn').addEventListener('click', function(){
    document.getElementById('asbeCash').classList.remove('hidden')
    document.getElementById('jabeCash').classList.add('hidden')
})

document.getElementById('cashOutBtn').addEventListener('click', function(){
    document.getElementById('jabeCash').classList.remove('hidden')
    document.getElementById('asbeCash').classList.add('hidden')
})

document.getElementById('cash-in-btn').addEventListener('click', function(e){
    e.preventDefault();
    const pin = document.getElementById('pin-out').value;
    const ammount = document.getElementById('ammount').innerText
    const a = parseFloat(ammount);
    const addedAmmount = document.getElementById('cash-in-amount').value
    const b = parseFloat(addedAmmount)
    if(pin === "1234"){
        const newBalance = a + b;
        document.getElementById('ammount').innerText = newBalance
    }
    else{
        alert('Wrong crediantans')
    }
})

document.getElementById('cash-out-btn').addEventListener('click', function(e){
    e.preventDefault();
    const cashOut = document.getElementById('cash-out-ammount').value;
    const pin = document.getElementById('cashout-pin').value
    let a = parseFloat(cashOut)
    let b = parseFloat(pin)
    const ammount = document.getElementById('ammount').innerText
    const c = parseFloat(ammount);
    if(pin === '1234'){
        const total = c - a;
        document.getElementById('ammount').innerText = total
    }
    else{
        alert("Wrong crediantals")
    }
})












