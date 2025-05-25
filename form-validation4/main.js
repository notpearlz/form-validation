const form = document.querySelector("form");

const email = document.getElementById("email");
const country = document.getElementById("country");
const post = document.getElementById("post");
const password = document.getElementById("password");
const confirmE = document.getElementById("confirm");

const emailError = document.querySelector("#email + .error")
const countryError = document.querySelector("#country + .error")
const postError = document.querySelector("#post + .error")
const passwordError = document.querySelector("#password + .error")
const confirmError = document.querySelector("#confirm + .error")


const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/
const postRegex = /[0-9]{5}/

email.addEventListener("input", ()=>{
    const validity = emailRegex.test(email.value) && email.value.length > 0;

    if(validity) {
        emailError.innerHTML = ""

    } else {
        emailError.innerHTML = "Email Error"
    }
});

country.addEventListener("input", ()=>{
    const validity = country.value.length > 0;

    if(validity) {
        countryError.innerHTML = ""

    } else {
        countryError.innerHTML = "Country Error"
    }
});

post.addEventListener("input", ()=>{
    const validity = post.value.length == 5 && postRegex.test(post.value);

    if(validity) {
        postError.innerHTML = ""

    } else {
        postError.innerHTML = "Postal Code Error"
    }
});

password.addEventListener("input", ()=>{
    const validity = password.value.length > 8

    if(validity) {
        passwordError.innerHTML = ""

    } else {
        passwordError.innerHTML = "Password Error"
    }
});

confirmE.addEventListener("input", ()=>{
    const validity = (password.value === confirmE.value)

    if(validity) {
        confirmError.innerHTML = ""

    } else {
        confirmError.innerHTML = "Passwords do not match Error"
    }
});

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    console.log(form.checkValidity())


});