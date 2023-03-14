let value = 0;
const body = document.querySelector("body");

body.innerHTML = `
  <main>
    <div class="container">
      <h1>Counter</h1>
      <span id="value">0</span>
      <div class="button-container">
        <button class="btn decrease">Decrease </button>
        <button class="btn reset">RESET </button>
        <button class="btn increase">INCREASE </button>
      </div>
    </div>
  </main>
`;

const buttons = document.querySelectorAll(".btn");
const displayVal = document.querySelector("#value");

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", (e) => {
    const countVal = e.currentTarget.classList;
    if (countVal.contains("decrease")) {
      value--;
    } else if (countVal.contains("reset")) {
      value = 0;
    } else if (countVal.contains("increase")) {
      value++;
    }

    if (value > 0) {
      displayVal.style.color = "blue";
    }
    if (value === 0) {
      displayVal.style.color = "#222";
    }
    if (value < 0) {
      displayVal.style.color = "maroon";
    }

    displayVal.textContent = value;
  });
});
