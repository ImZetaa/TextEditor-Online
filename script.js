// Get the elements
const htmlTab = document.getElementById("html-tab");
const cssTab = document.getElementById("css-tab");
const jsTab = document.getElementById("js-tab");
const runButton = document.getElementById("run-button");
const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const output = document.getElementById("output");

// Add event listeners
htmlTab.addEventListener("click", function() {
  // Make the html tab active and the others inactive
  htmlTab.classList.add("active");
  cssTab.classList.remove("active");
  jsTab.classList.remove("active");

  // Show the html code and hide the others
  htmlCode.classList.remove("hidden");
  cssCode.classList.add("hidden");
  jsCode.classList.add("hidden");
});

cssTab.addEventListener("click", function() {
   // Make the css tab active and the others inactive
   cssTab.classList.add("active");
   htmlTab.classList.remove("active");
   jsTab.classList.remove("active");

   // Show the css code and hide the others
   cssCode.classList.remove("hidden");
   htmlCode.classList.add("hidden");
   jsCode.classList.add("hidden");
});

jsTab.addEventListener("click", function() {
   // Make the js tab active and the others inactive
   jsTab.classList.add("active");
   htmlTab.classList.remove("active");
   cssTab.classList.remove("active");

   // Show the js code and hide the others
   jsCode.classList.remove("hidden");
   htmlCode.classList.add("hidden");
   cssCode.classList.add("hidden");
});

runButton.addEventListener("click", function() {
   // Get the code from the textareas
   const html = htmlCode.value;
   const css = cssCode.value;
   const js = jsCode.value;

   // Create a document for the output iframe
   const doc = output.contentWindow.document;

   // Write the html code to the document
   doc.open();
   doc.write(html);
   doc.close();

   // Create a style element for the css code
   const style = doc.createElement("style");
   style.innerHTML = css;

   // Append the style element to the head of the document
   doc.head.appendChild(style);

   // Create a script element for the js code
   const script = doc.createElement("script");
   script.innerHTML = js;

   // Append the script element to the body of the document
   doc.body.appendChild(script);
});

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var container = document.querySelector(".container");
    container.classList.toggle("dark-mode");
    
    var h1 = document.querySelector(".container h1");
    h1.classList.toggle("dark-mode");

    var inputs = document.querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.toggle("dark-mode");
    }

    var buttons = document.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("dark-mode");
    }
}

