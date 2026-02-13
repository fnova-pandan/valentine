document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const music = document.getElementById("bgm");

  yesBtn.addEventListener("click", () => {
    // Play music (HP-safe)
    music.volume = 0.8;
    music.play().catch(() => {});

    // Show messages
    document.getElementById("message").style.display = "block";
    document.getElementById("tips").style.display = "block";

    // Change background
    document.body.classList.add("sunflower-bg");

    // Confetti
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
