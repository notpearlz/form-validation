const form = document.querySelector("form");

const email = document.getElementById("mail");
const error = document.getElementById("error");



const validMail = ()=>{
    const validity = email.value.length > 0 && email.value.length <= 20;
    return validity;
}

email.addEventListener("input", ()=>{
    if(!validMail() || !email.validity.valid){ 
        error.innerHTML = "PUT A REAL EMAIL!!!";
        error.setAttribute("class", "active");
    } else {
        error.innerHTML = "";
        error.removeAttribute("class");
    }
})


form.addEventListener("submit", (x)=>{
    x.preventDefault();

    console.log(validMail());
});
