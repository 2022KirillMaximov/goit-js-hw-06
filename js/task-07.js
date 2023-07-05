const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
const valueEl = inputEl.value;


// console.log(inputEl)
// console.log(textEl)


const changeTextSize = () => {

    textEl.style.fontSize =`${valueEl}px`;


    console.log(valueEl)
    console.log(textEl.style.fontSize)
}
inputEl.addEventListener('input', changeTextSize)