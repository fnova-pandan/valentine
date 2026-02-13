document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const music = document.getElementById("bgm");

  // LOVE TIMER (20 Desember 20:55 WIB)
  const relationshipStart = new Date("2025-12-20T20:55:00+07:00");

  function updateLoveTimer() {
    const now = new Date();
    let diff = now - relationshipStart;
    if (diff < 0) return;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(daysTotal / 30);
    const days = daysTotal % 30;

    document.getElementById("loveTimer").innerText =
      `${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds 💞`;
  }

  setInterval(updateLoveTimer, 1000);
  updateLoveTimer();

  yesBtn.addEventListener("click", () => {
    music.volume = 0.8;
    music.play().catch(() => {});

    document.getElementById("message").style.display = "block";
    document.getElementById("tips").style.display = "block";

    document.body.classList.add("sunflower-bg");

    for (let i = 0; i < 120; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor =
        `hsl(${Math.random() * 360}, 80%, 65%)`;
      confetti.style.animationDuration =
        Math.random() * 2 + 3 + "s";

      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 5000);
    }
  });

  noBtn.addEventListener("mouseover", () => {
    noBtn.style.transform =
      `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`;
  });
});
