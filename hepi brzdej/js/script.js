const text = "Ti si moja i ja tebe volim najvišeee 🤍";
let i = 0;

function typeWriter() {
  if (document.getElementById("typing") && i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();

function showReasons() {
  const reasons = [
    "Volim te jer si ti moja 🤍",
    "Volim te jer me nasmijavaš 🤍",
    "Volim te jer si predivna osoba 🤍",
    "VOLIM TE ZATO ŠTO SI TI MOJA LJUBAV 🤍"
  ];

  const container = document.getElementById("reasons");

  reasons.forEach((r, index) => {
    setTimeout(() => {
      const div = document.createElement("div");
      div.className = "box";
      div.innerText = r;
      container.appendChild(div);
    }, index * 400);
  });

  document.getElementById("nextBtn").classList.remove("hidden");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
