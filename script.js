const toggleButton = document.getElementById('dark-mode-toggle');
    const themeStyle = document.getElementById('theme-style');
    
function toggleDarkMode() {
    if (themeStyle.getAttribute('href') === 'darkmode.css') {
      themeStyle.setAttribute('href', 'lightmode.css'); // Switch to light mode
      toggleButton.textContent = 'Dark Mode';
    } else {
      themeStyle.setAttribute('href', 'darkmode.css'); // Switch to dark mode
      toggleButton.textContent = 'Light Mode';
    }
  }

  // Add a click event listener to the toggle button
  toggleButton.addEventListener('click', toggleDarkMode);