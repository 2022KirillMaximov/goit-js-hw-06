const imputEl = document.querySelector('#validation-input');
const dataLength = imputEl.getAttribute('data-length');


const checkImputValueLength = (evt) => {
    const currentValue = evt.currentTarget.value
    if (Number(dataLength) === Number(currentValue.length)) {
        imputEl.classList.add("valid")
         imputEl.classList.remove("invalid")
    } else{
        imputEl.classList.remove("valid")
         imputEl.classList.add("invalid")
    }
}
imputEl.addEventListener("blur", checkImputValueLength)