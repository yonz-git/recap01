// 1. Target the CHECKBOX specifically, not the label
const darkModeToggle = document.querySelector('[data-js="darkModeToggle"]');

const isDarkMode = localStorage.getItem("darkMode") === "enabled";

if (isDarkMode) {
  document.body.classList.add("darkMode");
  if (darkModeToggle) darkModeToggle.checked = true; // Keep the switch visually 'on'
}

// --- 2. THE TOGGLE & SAVE ---
if (darkModeToggle) {
  darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("darkMode");

    if (document.body.classList.contains("darkMode")) {
      // Save the preference to the 'notebook'
      localStorage.setItem("darkMode", "enabled");
    } else {
      // Remove it if they turn it off
      localStorage.setItem("darkMode", "disabled");
    }
  });
}
