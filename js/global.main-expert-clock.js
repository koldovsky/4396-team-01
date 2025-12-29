const initExpertClock = () => {
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
};

initExpertClock();