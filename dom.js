const heading = document.querySelector("#title");
console.log(heading);
// heading.textContent = "text content Changed!";
// heading.innerHTML = "<em>inner HTML changed!</em>";
heading.style.color = "grey";


//event listeners
const btn = document.querySelector("#myBtn");

btn.addEventListener("click", () => {
  console.log("Button clicked");
});


let isClicked = false;

btn.addEventListener("click", () => {
  if (!isClicked) {
    heading.textContent = "Clicked !";
  } else {
    heading.textContent = "Unclicked!";
  }
  isClicked = !isClicked;
});
