// Header Component
const headerContent = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/styles.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Red+Hat+Display:ital@0;1&display=swap" rel="stylesheet">
<title>Caleb Clay</title>`;
const header = document.querySelector("head")
hw
const title = document.querySelector("head > title");
const contentTitle = document.querySelector("#content-title");
if (contentTitle !== null) {
    title.innerHTML = `${contentTitle} | Caleb Clay`
}

// Footer Component
const footer = document.querySelector("body > footer");
const footerContent = "<p>&copy; 2024 Caleb Clay.";
footer.innerHTML = footerContent;