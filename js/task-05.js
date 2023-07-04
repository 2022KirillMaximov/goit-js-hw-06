
const input = document.querySelector("#name-input");
const title = document.querySelector("#name-output")



input.addEventListener('input', (evt) => {
    title.textContent = evt.currentTarget.value;
    if  (title.textContent === "") title.innerHTML ="Anonymous";
    
});

// function handlerQuery(evt) {
//     selectors.title.textContent = evt.currentTarget.value;
//     if (evt.currentTarget.value === "false") {
//      return title.textContent = Anonymous;
//     }
// }