
// Add this to the script.js file
// Get the theme toggle element
const themeToggle = document.getElementById("theme-toggle");

// Add an event listener for the change event
themeToggle.addEventListener("change", function() {
   // Get the theme style element
   const themeStyle = document.getElementById("theme-style");

   // Check if the checkbox is checked or not
   if (themeToggle.checked) {
      // Change the href attribute of the theme style element to dark.css
      themeStyle.setAttribute("href", "dark.css");
   } else {
      // Change the href attribute of the theme style element to style.css
      themeStyle.setAttribute("href", "style.css");
   }
});


