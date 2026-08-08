const hamburger = document.querySelector(".hamburger");
hamburger.innerHTML += 
    `<nav class="navbar">
        <a href="index.html">Home</a>
        <a href="tips.html">Tips</a>
        <a href="basics.html">Basics</a>
        <a href="edit.html">Edit</a>
        <a href="resources.html">Resources</a>
    </nav>`;

const menuBtn = document.getElementById("menu");
const navigation = document.querySelector(".navbar");
menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuBtn.classList.toggle("open");
})

const currentYear = document.getElementById("currentyear");
currentYear.innerHTML = new Date().getFullYear();
const lastModified = document.getElementById("lastModified");

lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(new Date(document.lastModified))}</span>`;