
const selectors = {
    btnDecrement: document.querySelector(".js-decrement"),
    btnIncrement: document.querySelector(".js-increment"),
    counter: document.querySelector("#value")
}

// const btnDecrement = document.querySelector(".js-decrement")

// const btnIncrement = document.querySelector(".js-increment")

selectors.btnDecrement.addEventListener('click', handlerClickDecrement)

selectors.btnIncrement.addEventListener('click', handlerClickIncrement)

let value = 0;

function handlerClickDecrement() {
    value -= 1 
    selectors.counter.textContent = value;
}

function handlerClickIncrement() {
    value += 1
    selectors.counter.textContent =  value;
}

// console.log(btnIncrement)