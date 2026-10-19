# Portfolio - Assignment 2

A responsive personal portfolio website built with HTML, CSS and JavaScript. This version continues Assignment 1 and adds interactive features, data handling, user feedback and animations.

## Project Description
The site introduces me (Layan Alomari, a Computer Science student at KFUPM), shows two of my projects, and has a contact form. In Assignment 2 I made it more interactive and easier to use.

## Features
- **Live project search:** filter the projects as you type, with a "No projects found" message when nothing matches
- **Saved theme:** the dark/light mode choice is stored with `localStorage` and kept after a refresh
- **Contact form validation:** checks the name, email and message, shows clear error messages, and shows a confirmation message after a valid submit
- **Time-based greeting:** "Good morning", "Good afternoon" or "Good evening"
- **Animations:** hover effects on cards, links and buttons, and fade-in messages
- **Responsive design:** works on laptop, tablet and phone screens

## Technologies
- HTML5
- CSS3 (Grid, Flexbox, variables, transitions, animations, media queries)
- JavaScript (no libraries or frameworks)

## Project Structure
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

## Setup Instructions
No installation is needed.

1. Download the project: click **Code → Download ZIP** on the GitHub page and unzip it. (Or clone it with `git clone https://github.com/LayanAlomari/202351790-LayanAlomari-assignment2.git`.)
2. Open the project folder.
3. Double-click `index.html` to open it in your browser.

## How to Use
- Type in the **search box** in the Projects section to filter the projects.
- Click the **Dark Mode / Light Mode** button in the header to change the theme. Your choice is remembered.
- Fill in the **contact form** and click Send. If a field is wrong, a message tells you what to fix.

## AI Usage Summary
I used Claude as my only AI tool. It explained concepts (Git branches, `localStorage`, form validation) and suggested starting code for the search, theme saving, form validation and animations, which I adapted, tested and changed to fit my project. The full details are in [docs/ai-usage-report.md](docs/ai-usage-report.md).

## Documentation
- [Technical Documentation](docs/technical-documentation.md)
- [AI Usage Report](docs/ai-usage-report.md)

## Known Limitations
- The contact form has no backend, so messages are not sent.
- The theme may not be saved in private browsing mode.