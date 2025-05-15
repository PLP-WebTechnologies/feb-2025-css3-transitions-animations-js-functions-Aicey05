// 🌇 Interactive Image Gallery
const images = [
  "https://via.placeholder.com/400x250?text=House+1",
  "https://via.placeholder.com/400x250?text=House+2",
  "https://via.placeholder.com/400x250?text=House+3"
];
let currentIndex = 0;

const houseImage = document.getElementById("houseImage");
const nextImage = document.getElementById("nextImage");

nextImage.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  houseImage.src = images[currentIndex];
});

// 🎨 Theme Preference with localStorage
const colorButtons = document.querySelectorAll(".colorBtn");
colorButtons.forEach(button => {
  button.addEventListener("click", () => {
    const chosenColor = button.getAttribute("data-color");
    document.body.style.backgroundColor = chosenColor;
    localStorage.setItem("themeColor", chosenColor);
  });
});

// Load stored color on page load
window.addEventListener("load", () => {
  const savedColor = localStorage.getItem("themeColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
});

// 📋 Form Validation with Real-Time Feedback
const form = document.getElementById("houseForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || password.length < 8) {
    feedback.textContent = "Please fill all fields correctly.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Form submitted successfully!";
    feedback.classList.add("fade-in");
    form.reset();
  }
});

// 💻 Keypress Detection
document.addEventListener("keypress", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// 🤫 Secret double-click Easter egg
houseImage.addEventListener("dblclick", () => {
  alert("🏠 Secret unlocked! Here's a luxury villa just for you!");
});
