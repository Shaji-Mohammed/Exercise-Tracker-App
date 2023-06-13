const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

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
const colorVal = document.querySelector(".color");

button.addEventListener("click", () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[getRandomNumber()];
    // console.log(color.typeof)
  }
  body.style.backgroundColor = color;
  colorVal.innerHTML = `${color}`;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
