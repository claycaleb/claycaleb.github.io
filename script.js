// Title Component
const title = document.querySelector("head > title");
const contentTitle = document.querySelector("#content-title");
if (contentTitle !== null) {
    title.innerHTML = `${contentTitle} | Caleb Clay`
}

// Footer Component
const footer = document.querySelector("body > footer");
const footerContent = "<p>&copy; 2024 Caleb Clay.";
footer.innerHTML = footerContent;