document.getElementById('login-btn').addEventListener('click',function(){
    const number = document.getElementById('number').value ;
    const password = document.getElementById('password').value; 
    const getData = localStorage.getItem('userData')
    const get = JSON.parse(getData)
    const localStorageNumber = get.number;
    const localStoragePass = get.password ;
    console.log(localStorageNumber)
    if(parseFloat(number) === parseFloat(localStorageNumber) && parseFloat(password) === parseFloat(localStoragePass)){
        window.location.href = 'profile.html'
    }
    else{
        alert('Wrong Number or password')
    }
})

document.getElementById('Create-acc').addEventListener('click', function(){
    window.location.href = 'index.html'
})


