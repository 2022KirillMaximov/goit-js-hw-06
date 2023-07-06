const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");



// console.log(inputEl)
// console.log(textEl)


const changeTextSize = () => {
    const valueEl = inputEl.value;
    textEl.style.fontSize =`${valueEl}px`;


    console.log(valueEl)
    console.log(textEl.style.fontSize)
}
inputEl.addEventListener('input', changeTextSize)