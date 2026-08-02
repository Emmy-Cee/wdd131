const currentYear = document.getElementById("currentyear");
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

const lastModified = document.getElementById("lastModified");
if (lastModified) {
    lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat("en-US", {
        dateStyle: "full"
    }).format(new Date(document.lastModified))}</span>`;
}

const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        averagerating: 5.0
    }
];

const productSelect = document.getElementById("product");
if (productSelect) {
    populateProductOptions(productSelect, products);
}

function populateProductOptions(select, items) {
    items.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.name;
        select.appendChild(option);
    });
}

function getReviewCount() {
    return Number(localStorage.getItem("review-count")) || 0;
}

function setReviewCount(count) {
    localStorage.setItem("review-count", count);
}

function displayReviewCount(count) {
    const reviewDisp = document.getElementById("review-count");
    if (!reviewDisp) return;
    reviewDisp.textContent = count;
}

const reviewCountElement = document.getElementById("review-count");
if (reviewCountElement) {
    const currentCount = getReviewCount();
    const updatedCount = currentCount + 1;
    if (currentCount) {
        setReviewCount(updatedCount);
    }
    displayReviewCount(updatedCount);
}



