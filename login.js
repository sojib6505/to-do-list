document.getElementById('login-btn').addEventListener('click',function(){
    const number = document.getElementById('number').value ;
    const password = document.getElementById('password').value; 
    const getData = localStorage.getItem('userData')
    const get = JSON.parse(getData)
    const localStorageNumber = get.number;
    const localStoragePass = get.password ;
    if(parseFloat(number) === parseFloat(localStorageNumber) && parseFloat(password) === parseFloat(localStoragePass)){
        window.location.href = 'profile.html'
    }
    else{
        alert('worng')
    }
})



