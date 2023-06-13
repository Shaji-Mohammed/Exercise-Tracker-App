// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const body = document.querySelector("body");

body.innerHTML = `
<main>
  <section class="container">
    <div class="title">
      <h2> Our Reviews </h2>
      <div class="underline"></div>
    </div>
    <article class="review">
      <div class="img-container">
        <img id="person-img" src="https://images.imgbox.com/e0/57/qI5bbwvg_o.jpeg" alt="">
      </div>
      <h4 id="author"> michal Jackson </h4>
      <p id="job">Singer </p>
      <p id="info"> Michal Jackson is a very popular singer and is also known as then King of pop music.</p>
      <div class="btn-container">
        <button class="prev-btn"> 
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="next-btn"> 
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <button class="random-btn"> Surprise Me </button>
    </article>
  </section>
</main>
`;

let counter = 0;

const leftBtn = document.querySelector(".prev-btn");
const rightBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let image = document.querySelector("#person-img");
let job = document.querySelector("#job");
let info = document.querySelector("#info");
let author = document.querySelector("#author");

window.addEventListener("DOMContentLoaded", () => {
  changeSlide(counter);
});

function changeSlide() {
  let item = reviews[counter];
  image.setAttribute("src", item.img);
  job.textContent = item.job;
  info.textContent = item.text;
  author.textContent = item.name;
}

//right button
rightBtn.addEventListener("click", () => {
  counter++;
  if (counter > reviews.length - 1) {
    counter = 0;
  }
  // console.log(counter);
  changeSlide();
});

//left button
leftBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = reviews.length - 1;
  }
  changeSlide();
});

//Surprise Me button
randomBtn.addEventListener("click", () => {
  getRandomNumber();
  changeSlide();
});

//Generating random number
function getRandomNumber() {
  counter = Math.floor(Math.random() * reviews.length);
}
