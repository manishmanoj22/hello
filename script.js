const form = document.getElementById("greet-form");
const input = document.getElementById("name-input");
const greeting = document.getElementById("greeting");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = input.value.trim();
  greeting.textContent = name ? `Hello, ${name}! 🎉` : "Please enter a name.";
});
