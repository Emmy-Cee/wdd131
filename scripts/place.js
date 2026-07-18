const currentYear = document.getElementById("currentYear");

currentYear.innerHTML = new Date().getFullYear();

const lastModified = document.getElementById("lastModified");

lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat("en-US",
	{
		dateStyle: "full"
	}
    ).format(new Date(document.lastModified))}</span>`;

const windChill = document.getElementById("windChill");
const windChillValue = windChill.querySelector(".value");

const tempElement = document.querySelector(".temp .value");
const windElement = document.querySelector(".wind .value");

const temperature = parseFloat(tempElement.textContent);
const windSpeed = parseFloat(windElement.textContent);

function calculateWindChill(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) - 35.75 * (windSpeed ** 0.16) + (0.4275 * temperature * (windSpeed ** 0.16));
}

if (temperature <= 50 && windSpeed > 3) {
    windChillValue.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)}°F`;
} else {
    windChillValue.textContent = "N/A";
}