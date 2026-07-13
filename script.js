function toggleDarkMode() {
  const html = document.documentElement;
  const button = document.querySelector("button");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    html.classList.add("light");
    button.innerHTML = "🌙 Dark Mode";
  } else {
    html.classList.remove("light");
    html.classList.add("dark");
    button.innerHTML = "☀️ Light Mode";
  }
}

// Optional: Save user preference
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    document.querySelector("button").innerHTML = "☀️ Light Mode";
  }
}

// Load saved theme on page load
loadTheme();
