
// === FORM VALIDATION === //
const form = document.getElementById("form");
const first_Name = document.getElementById("name");
const last_Name = document.getElementById("surname");

const email = document.getElementById("email");
const tel = document.getElementById("phone");

const error = document.getElementById("error");

    form.addEventListener("submit", (e) => {
        let messages = [];
        let 
        if (first_Name.value === "" || first_Name.value === null) {
            messages.push("name is required");
        }
        if (messages.length > 0) {
            e.preventDefault();
            error.innerText = messages.join(", ");
        }
    })
// === FORM VALIDATION === //

// === textarea field that autosaves its value on every change  === //
const autoSaveTextArea = () => {
    const message = document.getElementById('message');
    message.value = localStorage.getItem("textarea");

    message.addEventListener('input', (e) => {
        localStorage.setItem("textarea",  message.value);
    });
}
autoSaveTextArea();
// ===  textarea field that autosaves its value on every change   === //
