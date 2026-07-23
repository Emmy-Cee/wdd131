const currentYear = document.getElementById("currentyear");

currentYear.innerHTML = new Date().getFullYear();


const lastModified = document.getElementById("lastModified");

lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat("en-US",
	{
		dateStyle: "full"
	}
    ).format(new Date(document.lastModified))}</span>`;