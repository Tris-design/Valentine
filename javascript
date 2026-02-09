const messages = [
  "Are you sure?",
  "Really sure??",
  "Sofi please 🥺",
  "Think again 💔",
  "I’ll be sad 😢",
  "Very very sad...",
  "Okay last chance 💕"
];

let index = 0;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("click", () => {
  noBtn.textContent = messages[index];
  index = (index + 1) % messages.length;

  const size = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = `${size * 1.25}px`;
});

yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
