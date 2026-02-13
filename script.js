const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

yesBtn.addEventListener("click", () => {
  document.getElementById("message").style.display = "block";
  document.getElementById("tips").style.display = "block";

  // Confetti
  for (let i = 0; i < 120; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.backgroundColor = `hsl(${Math.random() * 360},100%,60%)`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
});

noBtn.addEventListener("mouseover", () => {
  noBtn.style.transform =
    `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`;
});

// Floating hearts
setInterval(() => {
  const h = document.createElement("div");
  h.className = "floating-heart";
  h.innerHTML = "💗";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 300);
