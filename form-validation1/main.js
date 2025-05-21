const form = document.querySelector("form");

const user = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("number")
const comment = document.getElementById("comment");




form.addEventListener("submit", (event)=>{
    event.preventDefault();

    showError();

})


const validname = () => {
    const validity = user.value.length != 0 && user.value.length >= 5 && user.value.length <= 20;

    return validity;
}

const validemail = () => {
    const validity = email.value.length != 0 ;

    return validity;
}

const validphone = () => {
    const validity = phone.value.length != 0 && user.value.length <= 15;

    return validity;
}

const validcomment = () => {
    const validity = comment.value.length != 0 && user.value.length <= 200;

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

    if(!validcomment()){
        console.log("comment invalid")

    } 
}