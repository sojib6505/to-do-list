const getData = localStorage.getItem("userData");
const get = JSON.parse(getData);
const div = document.createElement('div')
div.innerHTML = `
 <div class="flex flex-col justify-center items-center bg-gray-500 w-[400px] rounded-xl">
    <p class="text-2xl font-bold">Name: ${get.fullName}</p>
 <p class="text-xl font-bold">Date of birth: ${get.day} / ${get.dateOfBirth.month} / ${get.dateOfBirth.year} </p>
 <p class="text-xl font-bold">Phone-Number: ${get.number}</p> 
 <p class="text-xl font-bold">Gender: ${get.gender}</p> 
 </div>
 <p class="mt-5 text-xl font-bold">Hey, ${get.fullName} “Success doesn’t come from what you do occasionally — </br> it comes from what you do consistently.”</p>
`
const main_div = document.getElementById('main-div');
main_div.appendChild(div)