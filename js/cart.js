(function initPromoToggle() {
    const promoBtn = document.querySelector(".promo-btn");
    const promoInput = document.getElementById("promo-input");
    if (!promoBtn || !promoInput) return;

    promoBtn.setAttribute("aria-expanded", "false");
    promoInput.setAttribute("aria-hidden", "true");
    promoInput.style.display = "none";

    promoBtn.addEventListener("click", () => {
        const isHidden = promoInput.style.display === "none" || promoInput.style.display === "";
        if (isHidden) {
            promoInput.style.display = "block";
            promoBtn.setAttribute("aria-expanded", "true");
            promoInput.setAttribute("aria-hidden", "false");
        } else {
            promoInput.style.display = "none";
            promoBtn.setAttribute("aria-expanded", "false");
            promoInput.setAttribute("aria-hidden", "true");
        }
    });
})();

(function initCartModal() {
    const cart = document.querySelector(".cart");
    const overlay = document.querySelector(".cart-overlay");
    const toggleBtn = document.querySelector(".cart-toggle-btn");
    const closeBtn = document.querySelector(".cart-close");
    const emptyModal = document.getElementById("cart-empty-modal");

    if (!cart || !overlay || !toggleBtn || !emptyModal) return;

    const openCart = () => {
        cart.style.display = "block";
        overlay.style.display = "block";
    };

    const closeCart = () => {
        cart.style.display = "none";
        overlay.style.display = "none";
        emptyModal.style.display = "none";
    };

    toggleBtn.addEventListener("click", openCart);
    overlay.addEventListener("click", closeCart);
    closeBtn.addEventListener("click", closeCart);

    document.querySelectorAll("#cart-empty-modal .cart-close").forEach(btn => {
        btn.addEventListener("click", closeCart);
    });
    const removeBtns = document.querySelectorAll(".item-remove");
    removeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            cart.style.display = "none";
            overlay.style.display = "block";
            emptyModal.style.display = "block";
        });
    });

})();
(function initPromoCode() {
    const applyBtn = document.querySelector(".promo-apply");
    const promoInput = document.getElementById("promo-code");
    const promoImage = document.querySelector(".promo-image");

    if (!applyBtn || !promoInput || !promoImage) return;

    applyBtn.addEventListener("click", () => {
        const code = promoInput.value.trim();

        if (code === "Hämis123") {
            promoImage.style.display = "block";
        } else {
            promoImage.style.display = "none";
            alert("Invalid promo code");
        }
    });
})();



