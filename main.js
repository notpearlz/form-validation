const form = document.querySelector("form");

const user = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("number")
const date = document.getElementById("date");




form.addEventListener("submit", (event)=>{
    event.preventDefault();

    showError();

})


const validname = () => {
    const validity = user.value.length != 0;

    return validity;
}

const validemail = () => {
    const validity = email.value.length != 0;

    return validity;
}

const validphone = () => {
    const validity = phone.value.length != 0;

    return validity;
}

const validdate = () => {
    const validity = date.value.length != 0;

    return validity;
}


function showError(){
    if(!validname()){
        console.log("username invalid")
    }

    if(!validemail()){
        console.log("email invalid")

    }

    if(!validphone()){
        console.log("phone number invalid")

    }

    if(!validdate()){
        console.log("date invalid")

    } 
}