import coins from './coin_name.json' assert {type: 'json'};

const moneditas = coins.coin
const coinsDropdown = document.querySelectorAll("form select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select")
const total = document.querySelector("form input");
const updatePrice = document.getElementById("dropmenu");

for (let i = 0; i < coinsDropdown.length; i++) {
    for(let currency_code in moneditas){
        let selected = i == 0 ? moneditas[currency_code].symbol == "BTC" ? "selected" : "" : moneditas[currency_code].symbol == "USDT" ? "selected" : "";
        let optionTag = `<option value="${moneditas[currency_code].symbol}" ${selected}>${moneditas[currency_code].symbol}</option>`;
        coinsDropdown[i].insertAdjacentHTML("beforeend", optionTag);
    }
    coinsDropdown[i].addEventListener("change", e =>{
        getCoinIcon(e.target);
    });
}

function getCoinIcon(element){

    for(let code in moneditas){
        if(element.value == moneditas[code].symbol){
            console.log(moneditas[code].symbol.toLowerCase());
            let img = element.parentElement.querySelector("img");
            img.src = `https://coinicons-api.vercel.app/api/icon/${moneditas[code].symbol.toLowerCase()}`;
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

updatePrice.addEventListener("click", e => {
    e.preventDefault();
    getPrice();
});


async function getPrice(){
    const exchangeRateTxt = document.querySelector("form .exchange-price");
    if (total.value == '') {
        total.value = 1;
        
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
    let url = `https://api.coinconvert.net/convert/${fromCurrency.value}/${toCurrency.value}?amount=${total.value}`;
    fetch(url).then(response => response.json()).then(result =>{
        exchangeRateTxt.innerText = `${result[fromCurrency.value]} ${fromCurrency.value} = ${result[toCurrency.value]} ${toCurrency.value}`;
    }).catch(() =>{
        if (fromCurrency.value == toCurrency.value){
            exchangeRateTxt.innerText = `${total.value} ${fromCurrency.value} = ${total.value} ${toCurrency.value}`;
        }
        else{
            exchangeRateTxt.innerText = "Something went wrong";
        }
    });
}




