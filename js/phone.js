const loadphone = async (searchtext = 13, isshowall) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchtext}`);

    const data = await res.json();
    const phones = data.data
    // console.log(data.data)
    displayPhones(phones, isshowall)

}
const displayPhones = (phones, isshowall) => {

    const phonecontainer = document.getElementById('phone_container')
    //clear data
    phonecontainer.textContent = ''

    //display show all btn if card name is getter than 10

    const showallContainer = document.getElementById('show-all-container')
    if (phones.length > 10 && !isshowall) {
        showallContainer.classList.remove('hidden')
    }
    else {
        showallContainer.classList.add('hidden')
    }
    //console.log('isshowall', isshowall)
    //display only first 10 phones if not show all
    if (!isshowall) {
        phones = phones.slice(0, 10);
    }

    phones.forEach(phone => {
        //  console.log(phone);
        //create a div
        const phoneCard = document.createElement('div')
        phoneCard.classList = "border-4  card p-6  bg-gray  "
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name
            }</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button onclick="handleshowdetails('${phone.slug}');
                my_modal_1.showModal()" class="btn btn-primary">Show details</button>
            </div>
        </div>
        `

        phonecontainer.appendChild(phoneCard)

    });
    toggleloadingspinner(false)

}

//handel search
const HandleSearch = (isshowall) => {
    //true loading
    toggleloadingspinner(true);
    const searchfield = document.getElementById('searchfield')
    const searchtext = searchfield.value

    // console.log(searchtext)
    loadphone(searchtext, isshowall);
}
//spinner hide and open
function toggleloadingspinner(isloading) {

    const loadingspinner = document.getElementById('loading-spinner');

    if (isloading) {
        loadingspinner.classList.remove('hidden');
    }
    else {
        loadingspinner.classList.add('hidden');
    }
}

//
const handleshowdetails = async (id) => {
    // console.log('click show')
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);

    const data = await res.json();
    const phone = data.data
    // console.log(phones)
    showphonedetails(phone)

}
const showphonedetails = (phone) => {

    // console.log(phone);
    const showdetailsphonename = document.getElementById('showdetailsphonename')
    showdetailsphonename.innerText = phone.name

}


///show all handler+
const handleShowall = () => {
    HandleSearch(true);
}
loadphone();