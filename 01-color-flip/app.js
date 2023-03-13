const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const body = document.querySelector("body");
body.style.backgroundColor = "lightblue";
body.innerHTML = `
  <nav>
    <div class="nav-div">
      <h4> color Flipper </h4>
      <ul class="nav-links"> 
        <li> <a href="index.html"> Simple </a></li>
        <li> <a href="hex.html"> Hex </a></li>
      </ul>
    </div>
  </nav>
  <main>
    <div class="container">
      <h2> Background Color: <span class="color"> light blue</span></h2>
      <button class="btn"> Change color </button>
    </div>
  </main>
`;

const button = document.querySelector(".btn");
const colorValue = document.querySelector(".color");

button.addEventListener("click", () => {
  const color = colors[getRandomNumber()];
  body.style.backgroundColor = color;
  colorValue.innerHTML = `${color}`;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
