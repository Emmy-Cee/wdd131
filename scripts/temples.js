const currentYear = document.getElementById("currentyear");
currentYear.innerHTML = new Date().getFullYear();

const lastModified = document.getElementById("lastModified");

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat("en-US",
	{
		dateStyle: "full"
	}
    ).format(new Date(document.lastModified))}</span>`;

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");

});
