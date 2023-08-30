const loadphone = async (searchtext) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchtext}`);

    const data = await res.json();
    const phones = data.data
    // console.log(data.data)
    displayPhones(phones)

}
const displayPhones = phones => {

    const phonecontainer = document.getElementById('phone_container')
    //clear data
    phonecontainer.textContent = ''

    //display show all btn if card name is getter than 10

    const showallContainer = document.getElementById('show-all-container')
    if (phones.length > 10) {
        showallContainer.classList.remove('hidden')
    }
    else {
        showallContainer.classList.add('hidden')
    }
    //display only first 10 phones
    phones = phones.slice(0, 10);


    phones.forEach(phone => {
        console.log(phone);
        //create a div
        const phoneCard = document.createElement('div')
        phoneCard.classList = "border-4  card p-6  bg-gray  "
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name
            }</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `

        phonecontainer.appendChild(phoneCard)

    });

}

//handel search
const HandleSearch = () => {

    const searchfield = document.getElementById('searchfield')
    const searchtext = searchfield.value

    console.log(searchtext)
    loadphone(searchtext);
}
