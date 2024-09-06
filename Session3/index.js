/*
const redElement = document.getElementById("red");
const greenElement = document.getElementById("green");
const blueElement = document.getElementById("blue");
const yellowElement = document.getElementById("yellow");

const targetElement = document.getElementById("target");

// --------- EVENT LISTNERS -------

redElement.addEventListener("click", () => {
  targetElement.style.background = "red";
  targetElement.innerText = `Selected Color: ` + "red";
});

greenElement.addEventListener("click", () => {
  targetElement.style.background = "green";
});

blueElement.addEventListener("click", () => {
  targetElement.style.background = "blue";
});

yellowElement.addEventListener("click", () => {
  targetElement.style.background = "yellow";
});

*/

//---------  EVENT DELEGATION ------

/*
const colorsContainerElement = document.getElementById("colors");
const targetElement = document.getElementById("target");

colorsContainerElement.addEventListener("click", (event) => {
  const culpretChildElement = event.target;
  const color = culpretChildElement.id;

  targetElement.style.background = color;
  targetElement.innerText = `Selected Color: ` + color;
});
*/

//  --------------------

//--------- FORm  ------------------

const formElement = document.getElementById("booking-form");

function validation(payload) {
  const { namezz, email } = payload;

  // name

  const isNameValid = validateName(namezz); // false

  // email

  const isValidEmail = validateEmail(email); // true

  return isNameValid && isValidEmail;
}

formElement.addEventListener("submit", (event) => {
  event.preventDefault(); // it will stop the reload of the page.

  const form = event.target;
  console.log(event);

  const name = form.elements["fullName"].value;
  const email = form.elements["email"].value;
  const doctor = form.elements["doctor"].value;
  const location = form.elements["location"].value;
  const date = form.elements["date"].value;

  const payload = {
    namezz: name,
    email,
    doctor,
    location,
    date,
  };

  console.log(payload);

  // validicaton

  if (validation(payload)) {
    fetch("locationsedpaylaod.com", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  } else {
    alert("enter good values");
  }

  // console.log(event);
});

// ----------------- EVENT focus and BLUR --------------

const nameElement = formElement.elements["fullName"];
const emailElement = formElement.elements["email"];
const nameInfoElement = document.getElementById("name-info");
const emailInfoElement = document.getElementById("email-info");

// NAME VALIDATION

nameElement.addEventListener("focus", () => {
  nameInfoElement.innerHTML = "";
});

function validateName(name) {
  let isValid = true;

  const nameRegex = /^[a-z A-Z]+$/;

  if (!name) {
    isValid = false;
    nameInfoElement.innerText = "Please enter name!!!";
  } else if (name.length < 5) {
    isValid = false;
    nameInfoElement.innerText = "Need atleasst 5 char";
  } else if (!name.match(nameRegex)) {
    isValid = false;
    nameInfoElement.innerText = "Please do not add special character";
  }

  return isValid;
}

nameElement.addEventListener("blur", (event) => {
  const name = event.target.value.trim();

  validateName(name);

  // Vulgarity check - AI -
  // fetch(youcompany/ai)
});

// EMAIL VLAIDATION

emailElement.addEventListener("focus", () => {
  emailInfoElement.innerHTML = "";
});

function validateEmail(email) {
  let isValid = true;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!email) {
    isValid = false;
    emailInfoElement.innerText = "Please enter email!!!";
  } else if (!String(email).match(emailRegex)) {
    isValid = false;
    emailInfoElement.innerText = "plese enter correct email";
  }

  return isValid;
}

emailElement.addEventListener("blur", () => {
  const email = event.target.value.trim();

  validateEmail(email);

  // BLOOM FILTER ->
});

// ------ localstorage ------------

// Destroy of page - WE WANT TO SAVE THE FORM

window.addEventListener("beforeunload", (event) => {
  const payload = {
    name: nameElement.value,
    email: emailElement.value,
  };

  localStorage.setItem("formDatasssssssssssssss", JSON.stringify(payload));
});

// CREATION OF new PAGE - DOmCOntentLoaded (100% dom elements are created ) - we want to populate the saved values

document.addEventListener("DOMContentLoaded", () => {
  const stringPayload = localStorage.getItem("formDatasssssssssssssss");
  const objectPayload = JSON.parse(stringPayload);

  const name = objectPayload.name;
  const email = objectPayload.email;
  // const { name, email } = objectPayload;

  nameElement.value = name;
  emailElement.value = email;
});
