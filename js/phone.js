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

// slice for show limited items
phones = phones.slice(0,12);

// console.log(phones.length)

phones.forEach(phone => {
    // console.log(phone)
    
    //step-2: create a div
    const phoneCard = document.createElement('div');
    phoneCard.classList =  `card w-96 bg-gray-100 p-6 shadow-xl`
    // step-3: set innerHTML
    phoneCard.innerHTML = ` <figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-center">
            <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
        </div>`;

        // step-4: appendChild
       phoneContainer.appendChild(phoneCard);

});
// hide loadingSpinner
toggleLoadingSpinner(false)
}

// Show Detail Button
const handleShowDetail = async(id)=>{
    console.log('button clicked',id)

    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    

    showPhoneDetails(phone);

}

const showPhoneDetails = (phone) =>{
    console.log(phone);
    const phoneName = document.getElementById('show-detail-phone-name');
    phoneName.innerText = phone.name;
    // show the modal
    show_details_modal.showModal()
}


// handle search btn:
const clickHandler = () =>{
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText);
}
// handle search recap
// const clickHandler2 = () =>{
    
//     const searchField = document.getElementById('search-field2')
//     const searchText = searchField.value;
//     console.log(searchText);
//     toggleLoadingSpinner(true);
//     loadPhone(searchText);
// }

const toggleLoadingSpinner = (isLoading)=>{
    const loadingSpinner = document.getElementById('loading-spinner');
   if(isLoading){
    loadingSpinner.classList.remove('hidden')
   }
   else{
    loadingSpinner.classList.add('hidden')
   }
}

// handle showAll
// const handleShowAll = () =>{
//     clickHandler();
// }
loadPhone();