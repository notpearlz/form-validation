const form = document.querySelector("form");

const uname = document.getElementById("uname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const comment = document.getElementById("comment");

const unameRegex = /^[a-z].[a-z0-9]{3,}/;
const emailRegex = /^[a-zA-Z]+@bigcorp.eu$/;
const phoneRegex = /([0-9]{10}|[0-9]{3}[ .-]?[0-9]{3}[ .-]?[0-9]{4})/;

const validuname = () => {
  const validity = unameRegex.test(uname.value);
  return validity;
};

const validemail = () => {
  const validity = emailRegex.test(email.value);
  return validity;
};

const validphone = () => {
  const validity = phoneRegex.test(phone.value);
  return validity;
};
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validuname()) {
    console.log("invalid username");
  }
  if (!validemail()) {
    console.log("invalid email");
  }
  if (!validphone()) {
    console.log("invalid phone number");
  }
});
