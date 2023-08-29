const loadPhone = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    displayPhones(phones);
}


const displayPhones = phones =>{
// console.log(phones)
// step-1: get the place where the elements will stay
const phoneContainer = document.getElementById('phone-container');
phones.forEach(phone => {
    console.log(phone)
    
    //step-2: create a div
    const phoneCard = document.createElement('div');
    phoneCard.classList =  `card w-96 bg-gray-100 shadow-xl`
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

loadPhone();