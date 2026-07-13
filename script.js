function toggleDarkMode() {
  const html = document.documentElement;
  const button = document.querySelector("button");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    html.classList.add("light");
    button.innerHTML = "Dark Mode";
    localStorage.setItem("theme", "light");
  } else {
    html.classList.remove("light");
    html.classList.add("dark");
    button.innerHTML = "Light Mode";
    localStorage.setItem("theme", "dark");
  }
}

// Optional: Save user preference
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    document.querySelector("button").innerHTML = "Light Mode";
  }
}

// Load saved theme on page load
loadTheme();
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const btn = document.getElementById("hamburger-btn");
  const icon = document.getElementById("hamburger-icon");
  const isOpen = !menu.classList.contains("hidden");

  if (isOpen) {
    menu.classList.add("hidden");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
    btn.setAttribute("aria-expanded", "false");
  } else {
    menu.classList.remove("hidden");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
    btn.setAttribute("aria-expanded", "true");
  }
}
