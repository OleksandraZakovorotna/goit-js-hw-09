let formData = {
    email: "", 
    message: ""
};

const key = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const input = form.querySelector("input");
const textarea = form.querySelector("textarea");


form.addEventListener("input", onInput);
form.addEventListener("submit", handleSubmit)
inputMessage()


function handleSubmit (event) {
    event.preventDefault();
    if(formData.email.trim() && formData.message.trim()) {
        console.log(formData);
        event.target.reset();
        localStorage.removeItem(key);
    } 
    else {
        return alert ('Fill please all fields');
    }
}


function onInput(event) {
    formData.email = input.value;
    formData.message = textarea.value;
    localStorage.setItem(key, JSON.stringify(formData));
}



function inputMessage(){
   const intupText = JSON.parse(localStorage.getItem(key))

   if(intupText) {
    input.value = intupText.email;
    textarea.value = intupText.message;
   }
}
