document.addEventListener("DOMContentLoaded", () => {
  const darkModeButton = document.getElementById("dark-mode");
  const body = document.body;

  // Function to update the icon inside the button
  const updateIcon = () => {
    if (body.classList.contains("dark")) {
      // In dark mode, show the sun icon with white color
      darkModeButton.innerHTML =
        '<i class="fas fa-sun fa-lg" style="color: #ffffff;"></i>';
    } else {
      // In light mode, show the moon icon
      darkModeButton.innerHTML = '<i class="fas fa-moon fa-lg"></i>';
    }
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    body.classList.toggle("dark");
    updateIcon(); // Update the icon after toggling
    // Save the theme to localStorage
    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
  };

  // Event listener for dark mode button click
  darkModeButton.addEventListener("click", toggleDarkMode);

  // Check initial state on page load and set the appropriate icon
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  }
  updateIcon(); // Set the correct icon on initial load based on the saved theme
});
