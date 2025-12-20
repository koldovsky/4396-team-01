
  const list = document.querySelector(".partners__list");
  const btnLeft = document.querySelector(".partners__arrow--left");
  const btnRight = document.querySelector(".partners__arrow--right");


  let isAnimating = false;

  function getItemWidth() {
    const item = list.children[0];
    const gap = parseInt(getComputedStyle(list).gap);
    return item.offsetWidth + gap;
  }

  btnRight.addEventListener("click", () => {
    if (isAnimating) return;
    isAnimating = true;

    const width = getItemWidth();

    // Move left
    list.style.transform = `translateX(-${width}px)`;

    list.addEventListener("transitionend", function handler() {
      list.appendChild(list.firstElementChild);
      list.style.transition = "none";
      list.style.transform = "translateX(0)";
      list.offsetHeight;
      list.style.transition = "transform 0.4s ease";
      list.removeEventListener("transitionend", handler);
      isAnimating = false;
    });
  });

  btnLeft.addEventListener("click", () => {
    if (isAnimating) return;
    isAnimating = true;

    const width = getItemWidth();

    // Move last element to the front
    list.insertBefore(list.lastElementChild, list.firstElementChild);
    list.style.transition = "none";
    list.style.transform = `translateX(-${width}px)`;
    list.offsetHeight; 
    list.style.transition = "transform 0.4s ease";
    list.style.transform = "translateX(0)";

    list.addEventListener("transitionend", function handler() {
      list.removeEventListener("transitionend", handler);
      isAnimating = false;
    });
  });


