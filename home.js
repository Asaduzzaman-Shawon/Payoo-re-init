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
        const total = a + b;
        console.log(total);
        let c = total.toString()
        ammount =  c.innerText
    }
    else{
        alert('Wrong crediantans')
    }
})