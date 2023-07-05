const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
const valueEl = inputEl.value;


// console.log(inputEl)
// console.log(textEl)


const changeTextSize = () => {

    textEl.style.fontSize = `${valueEl}px`;

}
inputEl.addEventListener('input', changeTextSize)