console.log("hello console !!!");

// select an elemetn

/*
const counterElement = document.getElementById("counter");

const incrementButtonElement = document.getElementById("increment");

incrementButtonElement.addEventListener("click", () => {
  const newNumebr = Number(counterElement.innerHTML) + 1;
  counterElement.innerHTML = newNumebr;
});

const decrementButtonElement = document.getElementById("decrement");

decrementButtonElement.addEventListener("click", () => {
  //   if (Number(counterElement.innerHTML) === 0) {
  //     return;
  //   }

  const newNumebr = Number(counterElement.innerHTML) - 1;

  counterElement.innerHTML = newNumebr;
});
*/

// ------------------ EVENT Object --------------

// incrementButtonElement.addEventListener("click", (e) => {
//   console.log(e);
// });

const containerElement = document.getElementById("container");

containerElement.addEventListener("click", () => {
  containerElement.style.background = "green";
  containerElement.textContent = "clicked";
});

containerElement.addEventListener("mouseover", (event) => {
  console.log(event);
  containerElement.style.background = "yellow";
  containerElement.textContent = "hover";
});
