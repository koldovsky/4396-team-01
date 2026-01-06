function init() {
  import("./global.header-burger.js");
  import("./global.main-partners.js");
  import("./global.main-expert-carousel.js");
  import("./global.main-expert-clock.js");
  import("./global.main-testimonials.js");
  import("./global.main-offer-cooldown.js");
  import("./cart.js")
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
