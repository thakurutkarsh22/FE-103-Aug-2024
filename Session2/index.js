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

  fetch("locationsedpaylaod.com", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  // console.log(event);
});
