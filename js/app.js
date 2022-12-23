const lista = document.querySelectorAll("form select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select")
const total = document.querySelector("form input");


for (let i = 0; i < lista.length; i++) {
    for(let currency_code in country_list){
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "ARS" ? "selected" : "";
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        lista[i].insertAdjacentHTML("beforeend", optionTag);
    }
    lista[i].addEventListener("change", e =>{
        getFlag(e.target);
    });
}

function getFlag(element){
    for(let code in country_list){
        if(code == element.value){
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}

window.addEventListener("load", ()=>{
    getPrice();
});

total.addEventListener("keyup", e => {
    e.preventDefault();
    getPrice();
});


const updateP = document.getElementById("updateP");
const updateP2 = document.getElementById("updateP2");

updateP.addEventListener("click", e => {
    e.preventDefault();
    getPrice();
});

updateP2.addEventListener("click", e => {
    e.preventDefault();
    getPrice();
});

const changeIcon = document.querySelector("form .icon");
changeIcon.addEventListener("click", ()=>{
    let flag = false;
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    getFlag(fromCurrency);
    getFlag(toCurrency);
    getPrice(flag);
})


function getPrice() {

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders // esto tiene linkeado la apikey en otro archivo
      };


    const displayPrice = document.querySelector("form .exchange-price");
    displayPrice.innerText = "Getting exchange rate...";
    let url = `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency.value}&from=${fromCurrency.value}&amount=${total.value}`;
    fetch(url, requestOptions).then(response => response.json()).then(result => {
        let exchangePrice = result.result;
        displayPrice.innerText = `${total.value} ${fromCurrency.value} = ${exchangePrice.toFixed(3)} ${toCurrency.value}`;
    }).catch(() => {
        displayPrice.innerText = "Something went wrong";
    });
}

