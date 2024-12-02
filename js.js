document.getElementById('logInBtn').addEventListener('click', function(e){
    e.preventDefault();
    const b = document.getElementById('input-pin').value;
    if(b === '1234'){
        console.log("ok");
        window.location.href = 'home.html'
    }
    else{
        alert('not ok')
    }
})

