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

// When the page opens, load the saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeButton.textContent = "Light Mode";
}

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Update the button text and save the choice
  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    themeButton.textContent = "Dark Mode";
    localStorage.setItem("theme", "light");
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


// Contact form validation
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const formSuccess = document.getElementById("form-success");

form.addEventListener("submit", function (event) {
  // Stop the page from reloading
  event.preventDefault();

  let isValid = true;
  formSuccess.hidden = true;

  // Name must not be empty
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email must look like name@example.com
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email, like name@example.com.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Message must have at least 10 characters
  if (messageInput.value.trim().length < 10) {
    messageError.textContent = "Please write a message of at least 10 characters.";
    isValid = false;
  } else {
    messageError.textContent = "";
  }

  // If everything is valid, show the confirmation and clear the form
  if (isValid) {
    formSuccess.textContent = "Thanks, " + nameInput.value.trim() + "! Your message was submitted.";
    formSuccess.hidden = false;
    form.reset();
  }
});