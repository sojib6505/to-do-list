document.getElementById("sign-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const fullName = firstName + " " + lastName;
  const day = document.getElementById("day").value.trim();
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value.trim();
  const gender = document.querySelectorAll('input[name="gender"]:checked')[0]
    ?.value;
  const number = document.getElementById("number").value.trim();
  const password = document.getElementById("password").value.trim();
  // ===============================First Name Validation
  if (!firstName) {
    document.getElementById("first-name-err").classList.remove("hidden");
  } else {
    document.getElementById("first-name-err").classList.add("hidden");
  }
  // ===============================last Name Validation
  if (!lastName) {
    document.getElementById("last-name-err").classList.remove("hidden");
  } else {
    document.getElementById("last-name-err").classList.add("hidden");
  }
  // ================================date of birth Validation
  if (!day || !month || !year) {
    const dateErr = document.getElementById("date-err");
    dateErr.classList.add("text-red-600");
    dateErr.innerText = "Date of birth is required.";
  }else{
    const dateErr = document.getElementById("date-err");
    dateErr.classList.remove("text-red-600");
    dateErr.innerText = "Date of birth";
  }
//  ===================================gender Validation
    if(!gender){
        const genderErr = document.getElementById('gender-err');
        genderErr.classList.add('text-red-600');
        genderErr.innerText = 'Gender is required.';
    }
    else{
        const genderErr = document.getElementById('gender-err');
        genderErr.classList.remove('text-red-600');
        genderErr.innerText = 'Gender';
    }
    // ===================================phone number Validation
    if(!number){
       const numberErr = document.getElementById('number-err');
        numberErr.classList.remove('hidden');
        const numberLabel = document.getElementById('number-label');
        numberLabel.classList.add('text-red-600');
        numberLabel.innerText = 'Phone Number is required?';
    }
    // ==================================password Validation
    if(!password){
       const passwordErr = document.getElementById('password-err');
        passwordErr.classList.remove('hidden');
        const passwordLabel = document.getElementById('password-label');
        passwordLabel.classList.add('text-red-600');
        passwordLabel.innerText = 'Password is required?';
    }

    setLocalStorageData('fullName', fullName);
    setLocalStorageData('dateOfBirth', {day, month, year});
    setLocalStorageData('gender', gender);
    setLocalStorageData('number', number);
    setLocalStorageData('password', password);
    if(firstName && lastName && day && month && year && gender && number && password){
        window.location.href = 'login.html'
    }
   
});

// =================================first Name Keyup Event
document.getElementById("first-name").addEventListener("keyup", function (e) {
  if (e.target.value) {
    document.getElementById("first-name-err").classList.add("hidden");
  }
});
// =================================last Name Keyup Event
document.getElementById("last-name").addEventListener("keyup", function (e) {
  if (e.target.value) {
    document.getElementById("last-name-err").classList.add("hidden");
  }
});
// =================================Date of Birth Change Event
document.getElementById('day').addEventListener('keyup', function(e){
   if(e.target.value){
    const dateErr = document.getElementById("date-err");
    dateErr.classList.remove("text-red-600");
    dateErr.innerText = "Date of birth";
   }
})
// =================================gender Change Event
document.querySelectorAll('input[name="gender"]').forEach((d)=>{
  d.addEventListener('change',function(e){
     const genderErr = document.getElementById('gender-err');
     genderErr.classList.remove('text-red-600');
     genderErr.innerText = `Selected Gender: ${e.target.value}`;
  })
})
// =================================phone number Keyup Event
document.getElementById("number").addEventListener("keyup", function (e) {
  if (e.target.value) {
    document.getElementById("number-err").classList.add("hidden");
     const numberLabel = document.getElementById('number-label');
        numberLabel.classList.remove('text-red-600');
        numberLabel.innerText = 'Phone Number'
  }
});
// =================================password Keyup Event
document.getElementById("password").addEventListener("keyup", function (e) {
  document.getElementById("password-err").classList.add("hidden");
        const passwordLabel = document.getElementById('password-label');
  passwordLabel.classList.remove('text-red-600');
        passwordLabel.innerText = 'Password';
})

const getLocalStorageData = () => {
  let userData = {}
  const data = localStorage.getItem("userData");
  if(data){
    userData = JSON.parse(data);
  }
  return userData;
}
const setLocalStorageData = (a , v) => {
  let userData = getLocalStorageData();
 
  userData[a] = v;
  const stringifiedData = JSON.stringify(userData);
  localStorage.setItem("userData", stringifiedData);
}

const openLogin = () =>{
  window.location.href = 'login.html'
}