let total = document.querySelector("form input");


window.addEventListener("load", ()=>{
    getPrice();
});

total.addEventListener("keyup", e => {
    e.preventDefault();
    if (isNaN(total.value)) {
        total.style.border = "1px solid red";
        return;
    }
    total.style.border = "1px solid green";
    getPrice();
});



const getPrice = () => {
    const taxedPrice = document.querySelector("form .exchange-price");
    const display = `$ ${Math.round(((total.value * 1.75) + Number.EPSILON) * 100) / 100}`;
    taxedPrice.innerText = display;
}
