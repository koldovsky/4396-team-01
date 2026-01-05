const secondsEl = document.querySelector(".offer__block-timer__seconds-number");
const minutesEl = document.querySelector(".offer__block-timer__minutes-number");
const hoursEl = document.querySelector(".offer__block-timer__hours-number");
const daysEl = document.querySelector(".offer__block-timer__days-number");

const nowDate = new Date();
const threeDaysInMs = 3 * 24 * 60 * 60 * 1000;
const offerEndDate = new Date(nowDate.getTime() + threeDaysInMs);

function updateOfferCooldown() {
    const currentDate = new Date();
    const timeDiff = offerEndDate - currentDate;

    const totalSeconds = Math.floor(timeDiff / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const remainingSecondsAfterDays = totalSeconds % (24 * 60 * 60);
    const hours = Math.floor(remainingSecondsAfterDays / (60 * 60));
    const remainingSecondsAfterHours = remainingSecondsAfterDays % (60 * 60);
    const minutes = Math.floor(remainingSecondsAfterHours / 60);
    const seconds = remainingSecondsAfterHours % 60;

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');

    if (timeDiff > 0) {
        setTimeout(updateOfferCooldown, 1000);
    } else {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
    }
}

updateOfferCooldown();




