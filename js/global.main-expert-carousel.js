const folder = "img/showcase/";

const files = [
  "modern-design-1.webp",
  "modern-design-2.webp",
  "modern-design-3.webp",
  "modern-design-4.webp",
  "modern-design-5.webp",
  "modern-design-6.webp",
  "modern-design-7.webp",
  "modern-design-8.webp",
];

let index = 0;
let images = [];

// load images from api
try {
  const res = await fetch("api/showcase-expert.json");
  const data = await res.json();
  if (data?.images?.length) {
    images = data.images;
  } else {
    images = files.map((name) => folder + name);
  }

} catch (error) {
  console.error("Failed to load showcase.json", e);
  images = files.map((name) => folder + name);
}

// helpers
 const withQuality = (url) =>
    url + (url.includes("?") ? "&" : "?") + "auto=compress&cs=tinysrgb&w=1200";

// selector staff
const slider = document.querySelector("[data-slider]");
const imgEl = document.querySelector("[data-img]");
const prevBtn = document.querySelector("[data-prev]");
const nextBtn = document.querySelector("[data-next]");
const dotsWrap = document.querySelector("[data-dots]");


function render() {
  imgEl.src = withQuality(images[index]);
  imgEl.alt = `Showcase image ${index + 1}`;

  [...dotsWrap.children].forEach((dot, i) => {
    dot.classList.toggle("is-active", i === index);
  });
}

function buildDots() {
  dotsWrap.innerHTML = "";
  images.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "gallery__dot" + (i === 0 ? " is-active" : "");
    dot.addEventListener("click", () => {
      index = i;
      render();
    });
    dotsWrap.appendChild(dot);
  });
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  render();
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  render();
});

//   mobile
let startX = 0;
slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  const delta = e.changedTouches[0].clientX - startX;
  if (Math.abs(delta) < 40) return;
  delta > 0 ? prevBtn.click() : nextBtn.click();
});

buildDots();
render();