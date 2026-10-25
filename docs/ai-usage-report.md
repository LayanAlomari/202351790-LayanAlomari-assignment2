# AI Usage Report - Assignment 2

## 1. Tools Used & Use Cases

### Claude
I used Claude as my only AI tool for this assignment, as a tutor and code helper. I used it to:
- Plan the assignment and divide it into tasks
- Understand Git ideas I had not used before: why the assignment uses a new repository, what a branch is, what `git push -u origin` does, and what `.DS_Store` is
- Fix the "Could not resolve host" error when cloning the repository
- Get starting code for the new features:
  - a live project search with a "No projects found" message
  - saving the dark/light theme with `localStorage`
  - contact form validation with error and confirmation messages
  - hover effects and fade-in animations
- Understand how each piece of code works, including events, `querySelectorAll`, `forEach`, `preventDefault`, `trim` and CSS `transition` and `@keyframes`
- Organize my CSS, for example merging the new button hover effect into my existing rules
- Write the technical documentation and README structure

I did not use any other AI tool for this assignment.

## 2. Benefits & Challenges

### Benefits
- I could ask follow-up questions until I understood a concept, such as what a branch is and why it is useful.
- It gave me working starting code for each feature, so I could spend my time understanding and testing it.
- It helped me find the cause of the clone error quickly. It was my network connection and not my repository.
- Splitting the assignment into phases kept me organized.

### Challenges
- Some suggestions did not suit me. For example, the image styling Claude suggested did not look good to me, so I kept my original version.
- One explanation was wrong at first. Claude misread the purple cloud icon in the VS Code Git graph and then had to correct itself. This showed me that I should check answers instead of trusting them completely.
- The code needed testing. I had to try each feature and check the browser Console to make sure it worked.

## 3. Learning Outcomes
- **Git:** how branches work, why to use `feature/interactivity`, how to publish a branch, and how to read the commit graph.
- **JavaScript:** how to respond to user actions with event listeners, how to loop over elements to filter them, how to read and write `localStorage`, and how to validate input and show messages.
- **Forms:** why `event.preventDefault()` is needed, how `trim()` and a regular expression check input, and why a good error message says what is wrong and how to fix it.
- **CSS:** the difference between `transition` and `@keyframes`, how `:empty` hides an element until it has content, and why it is better to keep each selector in one place.
- **Workflow:** building a feature, testing it, and committing it before starting the next one.

## 4. Responsible Use & Modifications
I did not copy the AI output without checking it. I reviewed each suggestion, made my own decisions, and tested the result:

- I kept my original `.project-box img` styling instead of the `aspect-ratio` and `object-fit` version, because I preferred how mine looked.
- I merged the new hover and transition lines into my existing `button`, `nav a` and `.project-box` rules instead of leaving duplicate rules.
- I asked questions about the parts I did not understand, such as what a branch is, why `git push -u` is needed and what `.DS_Store` is.
- I added my own project screenshots to `assets/images` and wrote the alt text.
- I changed the animation distance in the fade-in effect and checked how it looked.
- I tested each feature: searching for words that match and do not match, saving the theme and refreshing, submitting the form empty and with valid data, and viewing the page at laptop, tablet and phone sizes.

All AI help is documented in this report.

## Usage Log

| ID | Tool (model) | Date | Purpose | Files affected | What I changed and how I verified it |
|---|---|---|---|---|---|
| C01 | Claude | 2026-10-19 | Main conversation for Assignment 2: planning, Git help, explanations, debugging | all files | See the artifact rows below |
| A01 | Claude | 2026-10-19 | `charset` and `viewport` meta tags, `.DS_Store` line | `index.html`, `.gitignore` | Checked the page still looks the same and fits a phone in DevTools |
| A02 | Claude | 2026-10-19 | Live project search with "No projects found" message | `index.html`, `js/script.js`, `css/styles.css` | Tested `star`, `daleel`, a word with no match, and clearing the box |
| A03 | Claude | 2026-10-19 | Saving the theme with `localStorage` | `js/script.js` | Switched theme, refreshed, checked it stayed |
| A04 | Claude | 2026-10-19 | Contact form validation and confirmation message | `index.html`, `js/script.js`, `css/styles.css` | Submitted empty, with a bad email, a short message, and valid data |
| A05 | Claude | 2026-10-19 | Hover effects and fade-in animations | `css/styles.css` | Merged into my existing rules. Checked hover and fade-in in the browser |
| A06 | Claude | 2026-10-19 | Markup for the project screenshots | `index.html` | Used my own screenshots. Kept my original image CSS and did not use the suggested `aspect-ratio` version |
| A07 | Claude | 2026-10-19 | First drafts of documentation | `README.md`, `docs/technical-documentation.md`, `docs/ai-usage-report.md` | Checked each statement against my code |

## Commits Assisted by AI
These commits were made before the AI-credit rule was announced, so they don't contain the `Assisted-by` line. The AI-assisted ones are:

| Commit | Message | AI help |
|---|---|---|
| 89ea4c6 | add meta tag and ignore .DS_Store | Claude: A01 |
| 8cb6831 | Add live project search with empty state | Claude: A02 |
| 6a5964a | Save theme choice in localStorage | Claude: A03 |
| d4e6fe1 | Add contact form validation and confirmation message | Claude: A04 |
| c0e2579 | Add hover effects and fade-in animations | Claude: A05 |
| adf5579 | Add project screenshots | Claude: A06 |
| fa5f977 | [README and documentation commits] | Claude: A07 |

The commits "Initial commit" and "copy assignment files" were not AI-generated.

## Declaration

I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

Name: Layan Alomari
ID: 202351790
Date: 2026-10-25