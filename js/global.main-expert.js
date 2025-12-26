(function initExpertClock() {
  const el = document.getElementById("expertClock");
  if (!el) return;

  const pad = (n) => String(n).padStart(2, "0");

  const tick = () => {
    const d = new Date();
    el.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    el.setAttribute("datetime", d.toISOString());
  };

  tick();
  setInterval(tick, 1000);
})();

const folder = "img/showcase/";

const files = [
    "modern-design-1.webp",
    "modern-design-2.webp",
    "modern-design-3.webp",
    "modern-design-4.webp",
    "modern-design-5.webp",
    "modern-design-6.webp",
    "modern-design-7.webp",
    "modern-design-8.webp"
  ];

  const images = files.map(name => folder + name);

  const slider = document.querySelector("[data-slider]");
  const imgEl = document.querySelector("[data-img]");
  const prevBtn = document.querySelector("[data-prev]");
  const nextBtn = document.querySelector("[data-next]");
  const dotsWrap = document.querySelector("[data-dots]");

  let index = 0;

  function render() {
    imgEl.src = images[index];
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
  slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", e => {
    const delta = e.changedTouches[0].clientX - startX;
    if (Math.abs(delta) < 40) return;
    delta > 0 ? prevBtn.click() : nextBtn.click();
  });

  buildDots();
  render();