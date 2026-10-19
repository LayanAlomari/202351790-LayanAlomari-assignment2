# Technical Documentation

## 1. Overview
This is Assignment 2 of my portfolio. It builds on the Assignment 1 site (HTML, CSS, JavaScript, no frameworks or backend) and adds interactivity: a live project search, a saved theme, a validated contact form, user feedback messages and animations.

## 2. File Structure
```
202351790-LayanAlomari-assignment2/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
|       ├── flying-stars.png
│       └── daleel-kfupm.png
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

| File | Purpose |
|---|---|
| `index.html` | Page structure and content |
| `css/styles.css` | Layout, colors, responsive design, dark mode and animations |
| `js/script.js` | Greeting, theme toggle, project search and form validation |
| `docs/` | Project documentation |

## 3. Changes from Assignment 1
- Added the `charset` and `viewport` meta tags so text and the mobile layout display correctly.
- Added a live search for the projects.
- The theme choice is now saved with `localStorage`.
- The contact form now validates input and shows messages.
- Added hover effects and fade-in animations.
- Replaced the placeholder images with screenshots of my projects (stored in `assets/images/`).

## 4. Features

### 4.1 Live project search (dynamic content)
A search box above the projects filters them as the user types.

- A listener on the `input` event runs on every keystroke.
- The typed text is lowercased and trimmed, so the search ignores capital letters.
- For each `.project-box`, the script checks whether the box's text (title and description) contains the search text, using `includes()`.
- Matching boxes are shown and the others are hidden with the `hidden` property.
- A counter tracks how many projects match. If it is 0, the message "No projects found. Try a different word." is shown (empty state).
- Clearing the box shows all projects again.

### 4.2 Saved theme (data handling with localStorage)
- When the user clicks the theme button, the choice is saved with `localStorage.setItem("theme", "dark")` or `"light"`.
- When the page loads, the script reads it with `localStorage.getItem("theme")`. If it is `"dark"`, the `dark-mode` class is added to `<body>` and the button text is set to "Light Mode".
- Dark mode works by replacing the CSS color variables under `body.dark-mode`.

### 4.3 Contact form validation (data handling and feedback)
The form uses `novalidate` so the page shows its own messages instead of the browser's pop-ups. On submit, `event.preventDefault()` stops the page from reloading and the script checks each field:

| Field | Rule | Error message |
|---|---|---|
| Name | Not empty (after `trim()`) | "Please enter your name." |
| Email | Matches the pattern `name@example.com` (regular expression) | "Please enter a valid email, like name@example.com." |
| Message | At least 10 characters | "Please write a message of at least 10 characters." |

A variable `isValid` becomes `false` if any check fails, and all errors are shown together. If everything is valid, a confirmation message with the user's name is shown ("Thanks, NAME! Your message was submitted.") and the form is cleared. The name is inserted with `textContent` so it is treated as plain text.

### 4.4 Animations and transitions
- **Hover effects:** project boxes lift up with a shadow, nav links and buttons change smoothly (CSS `transition`).
- **Fade-in:** project boxes, error messages, the success message and the "No projects found" message use a `fade-in` animation (`@keyframes`, 0.4 seconds). Error paragraphs use `:empty { display: none; }`, so they are hidden until text is added and the animation plays when it appears.

## 5. Responsive Design
The layout is unchanged from Assignment 1: Flexbox for the header and form, CSS Grid for the projects (two columns, one column at 600px and below), and media queries for tablet (768px) and mobile (600px). The new search box and messages adapt to the same layout.

## 6. Testing
- Searched for words in each project, for a word that matches nothing, and cleared the box.
- Switched the theme, refreshed the page and checked that the choice was kept.
- Submitted the form empty, with an invalid email, with a short message and with valid data.
- Checked hover effects, fade-in animations and dark mode.
- Checked the layout at laptop, tablet and phone sizes in Chrome DevTools.
- Checked the browser Console for errors.

## 7. Known Limitations
- The contact form has no backend, so messages are not actually sent or stored.
- The search only checks the title and description text of each project.
- The email check is a basic pattern and does not prove the address exists.
- `localStorage` may not save the theme in private browsing mode.