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

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
	{
		templeName: "Apia Samoa Temple",
		location: "Apia, Samoa",
		dedicated: "1983, August, 7",
		area: 18691,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/400x250/apia-samoa-temple-lds-460475-wallpaper.jpg"
	},
	{
		templeName: "Arequipa Peru Temple",
		location: "Arequipa Peru",
		dedicated: "2019, December, 15",
		area: 26969,
		imageUrl: 
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/400x250/2-3c2316607190934fc0265f4107b5013b0cc4b21e.jpeg"
	},
	{
		templeName: "Atlanta Georgia Mormon Temple",
		location: "Goergia, United States",
		dedicated: "1983, June, 4",
		area: 34500,
		imageUrl: 
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/800x500/atlanta-georgia-mormon-temple-900182-wallpaper.jpg"
	}
];

const container = document.querySelector(".container");
createEachCard(temples);


let homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
	createEachCard(temples);
});

let oldBtn = document.querySelector("#old");
oldBtn.addEventListener("click", () => {
	createEachCard(temples.filter(temple => (temple.dedicated.split(" ")[0] < "1900")))
});

let newBtn = document.querySelector("#new");
newBtn.addEventListener("click", () => {
	createEachCard(temples.filter(temple => temple.dedicated.split(" ")[0] < "2000"))
});

let largeBtn = document.querySelector("#large");
largeBtn.addEventListener("click", () => {
	createEachCard(temples.filter(temple => temple.area > 90000))
});

let smallBtn = document.querySelector("#small");
smallBtn.addEventListener("click", () => {
	createEachCard(temples.filter(temple => temple.area < 10000))
});

function createEachCard(filteredTemples) {
	container.innerHTML = "";
	filteredTemples.forEach(temple => {
		container.innerHTML +=
		`<figure>
			<figcaption>
				<p>${temple.templeName}</p>
				<p>Location: ${temple.location}</p>
				<p>Dedicated: ${temple.dedicated}</p>
				<p>Size: ${temple.area} sq ft</p>
			</figcaption>
			<img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
		</figure>`
	})
}
