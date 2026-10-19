// Greeting based on the time of day
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning!";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon!";
} else {
  greeting.textContent = "Good evening!";
}

// Dark/light mode button
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
  // Add the class if it's missing, remove it if it's there
  document.body.classList.toggle("dark-mode");

  // Change the button text to match
  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "Light Mode";
  } else {
    themeButton.textContent = "Dark Mode";
  }
});


// Live search for projects
const searchInput = document.getElementById("project-search");
const projectBoxes = document.querySelectorAll(".project-box");
const noResults = document.getElementById("no-results");

searchInput.addEventListener("input", function () {
  // Lowercase the text so the search ignores capital letters
  const searchText = searchInput.value.toLowerCase().trim();
  let matches = 0;

  projectBoxes.forEach(function (box) {
    // Check the search text against the title and description
    const boxText = box.textContent.toLowerCase();

    if (boxText.includes(searchText)) {
      box.hidden = false;
      matches++;
    } else {
      box.hidden = true;
    }
  });

  // Show the message only when no project matches
  noResults.hidden = matches > 0;
});