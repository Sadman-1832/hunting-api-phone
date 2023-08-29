const loadPhone = async(searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    displayPhones(phones);
}


const displayPhones = phones =>{
// console.log(phones)
// step-1: get the place where the elements will stay
const phoneContainer = document.getElementById('phone-container');

// auto clearing previous search
phoneContainer.textContent = '';

const showAllContainer = document.getElementById('show-all-container');
if(phones.length >12){
showAllContainer.classList.remove('hidden')
}
else{
    showAllContainer.classList.add('hidden')
}

phones = phones.slice(0,12);

console.log(phones.length)

phones.forEach(phone => {
    console.log(phone)
    
    //step-2: create a div
    const phoneCard = document.createElement('div');
    phoneCard.classList =  `card w-96 bg-gray-100 p-6 shadow-xl`
    // step-3: set innerHTML
    phoneCard.innerHTML = ` <figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
        </div>`;

        // step-4: appendChild
       phoneContainer.appendChild(phoneCard);

})
}
// handle search btn:
const clickHandler = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}
const clickHandler2 = () =>{
    const searchField = document.getElementById('search-field2')
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}

loadPhone();