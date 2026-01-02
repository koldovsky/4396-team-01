const slides = [
  `<div class="testimonials__slide">
        <article class="review-card">
          <div class="review-card__rating">★★★★★ <span>5</span></div>
          <p class="review-card__text">
            Before this course, I was constantly stressed about money. Now I
            finally have a plan, a budget I can follow, and actual savings. It
            feels like I got control back, one step at a time.
          </p>
          <div class="review-card__author">
            <img
              src="img/testimonials/amanda.webp"
              alt="Amanda Peterson"
              class="review-card__avatar"
            />
            <div class="review-card__meta">
              <span class="review-card__name">Amanda Peterson</span>
              <span class="review-card__job">Founder at Bloom Wellness</span>
            </div>
          </div>
        </article>
      </div>`,

  `<div class="testimonials__slide">
        <article class="review-card">
          <div class="review-card__rating">★★★★★ <span>5</span></div>
          <p class="review-card__text">
            I used to think finance was too complex for me. This course changed
            that. It is simple, practical, empowering, and effective — I even
            helped my partner get on board!
          </p>
          <div class="review-card__author">
            <img
              src="img/testimonials/carlos.png"
              alt="Carlos Pena"
              class="review-card__avatar"
            />
            <div class="review-card__meta">
              <span class="review-card__name">Carlos Pena</span>
              <span class="review-card__job">Manager at Coco&Banana Co</span>
            </div>
          </div>
        </article>
      </div>`,

  `<div class="testimonials__slide">
        <article class="review-card">
          <div class="review-card__rating">★★★★ <span>4</span></div>
          <p class="review-card__text">
            There was no fluff, no hype — just clear strategies that actually
            worked for me. I paid off my first credit card and finally started
            saving without second-guessing every decision.
          </p>
          <div class="review-card__author">
            <img
              src="img/testimonials/token.webp"
              alt="Token Peterson"
              class="review-card__avatar"
            />
            <div class="review-card__meta">
              <span class="review-card__name">Token Peterson</span>
              <span class="review-card__job">Freelance Designer</span>
            </div>
          </div>
        </article>
      </div>`,

  `<div class="testimonials__slide">
        <article class="review-card">
          <div class="review-card__rating">★★★★ <span>4</span></div>
          <p class="review-card__text">
            What I loved most was the mindset shift that happened quickly for
            me. I stopped avoiding money and started managing it with
            confidence. That alone has been life-changing.
          </p>
          <div class="review-card__author">
            <img
              src="img/testimonials/lana.webp"
              alt="Lana Ray"
              class="review-card__avatar"
            />
            <div class="review-card__meta">
              <span class="review-card__name">Lana Ray</span>
              <span class="review-card__job">Marketing Lead at FreshCore</span>
            </div>
          </div>
        </article>
      </div>`,
];

let currentSlideIndex = 0;

function showSlide(index) {
  const testimonialsContainer = document.querySelector(".sliders");
  if (!testimonialsContainer) return;
  
  testimonialsContainer.innerHTML = slides[index];
  if (window.matchMedia("(min-width: 600px)").matches) {
    const secondSlideIndex = (index + 1) % slides.length;
    testimonialsContainer.insertAdjacentHTML(
      "beforeend",
      slides[secondSlideIndex]
    );
    if (window.matchMedia("(min-width: 900px)").matches) {
      const thirdSlideIndex = (index + 2) % slides.length;
      testimonialsContainer.insertAdjacentHTML(
        "beforeend",
        slides[thirdSlideIndex]
      );
    }
  }
}

showSlide(currentSlideIndex);

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
}

// setInterval(nextSlide , 3000)

const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

window.addEventListener('resize' , () => showSlide(currentSlideIndex))
