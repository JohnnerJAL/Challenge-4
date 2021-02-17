const body = document.querySelector("body");
const input = document.getElementById("input");

let state = true;

body.addEventListener("click", e => {
  if (state && e.target.dataset.click === "super-button") {
    input.focus();
    state = false;
  } else if (!state) {
    input.blur();
    state = true;
  }
})