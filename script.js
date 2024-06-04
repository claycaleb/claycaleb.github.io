// Title Component
const title = document.querySelector("head > title");
const contentTitle = document.querySelector("#content-title");
if (contentTitle !== null) {
    title.innerHTML = `${contentTitle.innerHTML} | Caleb Clay`
}

// Header Component
const header = document.querySelector("body > header");
const headerContent = `
<h1><a href="/">Caleb Clay</a></h1>
<hr>`;
header.innerHTML = headerContent;

// Footer Component
const footer = document.querySelector("body > footer");
footer.innerHTML = `
<script async data-uid="bb8409e70b" src="https://calebclay.ck.page/bb8409e70b/index.js"></script>
<p>&copy; 2024 Caleb Clay. All rights reserved.</p>`;