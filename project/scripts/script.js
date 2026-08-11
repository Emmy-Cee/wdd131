const hamburger = document.querySelector(".hamburger");
let navigation = document.querySelector(".navbar");

if (!navigation && hamburger) {
    navigation = document.createElement("nav");
    navigation.className = "navbar";
    navigation.id = "main-navigation";
    navigation.innerHTML = `
        <a href="index.html" class="active">Home</a>
        <a href="tips.html">Tips</a>
        <a href="basics.html">Basics</a>
        <a href="edit.html">Edit</a>
        <a href="resources.html">Resources</a>
        <a href="references.html">References</a>
    `;
    hamburger.appendChild(navigation);
}

const menuBtn = document.getElementById("menu");
if (menuBtn && navigation) {
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-controls", "main-navigation");

    menuBtn.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");
        menuBtn.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
    });
}

const currentYear = document.getElementById("currentyear");
currentYear.innerHTML = new Date().getFullYear();
const lastModified = document.getElementById("lastModified");

lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(new Date(document.lastModified))}</span>`;

// ===== Page-specific interactions =====
function setupBasicsQuiz() {
    const quizButton = document.getElementById("quiz-button");
    const quizOutput = document.getElementById("quiz-output");

    if (!quizButton || !quizOutput) {
        return;
    }

    const quizItems = [
        {
            question: "Which setting controls motion blur?",
            answer: "shutter speed"
        },
        {
            question: "Which setting makes the background blurrier?",
            answer: "aperture"
        },
        {
            question: "Which setting should be lowered in bright light to keep noise low?",
            answer: "ISO"
        }
    ];

    quizButton.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quizItems.length);
        const nextQuiz = quizItems[randomIndex];
        quizOutput.textContent = `Try this: ${nextQuiz.question} (hint: ${nextQuiz.answer})`;
    });
}

function setupCompositionChallenge() {
    const challengeButton = document.getElementById("composition-challenge-btn");
    const challengeOutput = document.getElementById("composition-challenge-output");

    if (!challengeButton || !challengeOutput) {
        return;
    }

    const challenges = [
        "Frame your subject using a doorway or window.",
        "Place your main subject on the left or right third of the frame.",
        "Use a leading line such as a path or fence to guide the eye.",
        "Find a simple background and keep the subject clearly separated.",
        "Capture a scene from a low angle so the subject fills more of the frame."
    ];

    const savedChallenge = localStorage.getItem("compositionChallenge");
    if (savedChallenge) {
        challengeOutput.textContent = `Saved challenge: ${savedChallenge}`;
    }

    challengeButton.addEventListener("click", () => {
        const hintIndex = Math.floor(Math.random() * challenges.length);
        const nextChallenge = challenges[hintIndex];
        challengeOutput.textContent = `Your challenge: ${nextChallenge}`;
        localStorage.setItem("compositionChallenge", nextChallenge);
    });
}

setupBasicsQuiz();
setupCompositionChallenge();

// ===== Tips Page Checklist (localStorage + Arrays + Objects + Conditionals) =====
const checklist = document.querySelector("fieldset");

if (checklist) {
    // Array of checklist items (objects)
    const checklistItems = [
        { id: 0, text: "Lens is clean" },
        { id: 1, text: "Grid is turned on" },
        { id: 2, text: "Subject is well lit" },
        { id: 3, text: "You tapped to focus" },
        { id: 4, text: "You are not using digital zoom" },
        { id: 5, text: "You are holding the phone steady" }
    ];

    // Get saved progress from localStorage (or start with empty array)
    let savedProgress = JSON.parse(localStorage.getItem("checklistProgress")) || [];

    // Create a progress display element
    const progressMsg = document.createElement("p");
    progressMsg.id = "progress-message";
    progressMsg.style.marginTop = "15px";
    progressMsg.style.fontWeight = "bold";
    checklist.after(progressMsg);

    // Function to update the progress message
    function updateProgress() {
        const total = checklistItems.length;
        const completed = savedProgress.length;

        if (completed === 0) {
            progressMsg.textContent = "You haven't checked any items yet.";
        } else if (completed === total) {
            progressMsg.textContent = `🎉 Great job! You completed all ${total} items!`;
        } else {
            progressMsg.textContent = `You have completed ${completed} out of ${total} items.`;
        }
    }

    // Restore checked state when page loads
    const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        // Check if this item was previously saved
        if (savedProgress.includes(index)) {
            checkbox.checked = true;
        }

        // Listen for changes
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                // Add to array if not already there
                if (!savedProgress.includes(index)) {
                    savedProgress.push(index);
                }
            } else {
                // Remove from array
                savedProgress = savedProgress.filter(item => item !== index);
            }

            // Save the updated array to localStorage
            localStorage.setItem("checklistProgress", JSON.stringify(savedProgress));
            updateProgress();
        });
    });

    // Show progress when page first loads
    updateProgress();
}

// ===== RESOURCES PAGE =====
const resourcesContainer = document.getElementById("resources-container");

if (resourcesContainer) {
    // Array of resource objects
    const resources = [
        {
            id: 1,
            name: "Snapseed",
            type: "app",
            description: "Powerful and completely free photo editor for mobile."
        },
        {
            id: 2,
            name: "Lightroom Mobile",
            type: "app",
            description: "Excellent for color correction and professional-looking edits."
        },
        {
            id: 3,
            name: "Google Photos",
            type: "app",
            description: "Simple editing tools + free cloud storage."
        },
        {
            id: 4,
            name: "Budget Tripod",
            type: "gear",
            description: "Affordable tripod (under $30) for sharper low-light photos."
        },
        {
            id: 5,
            name: "Phone Lens Kit",
            type: "gear",
            description: "Clip-on wide-angle and macro lenses for smartphones."
        },
        {
            id: 6,
            name: "Photography Life",
            type: "learning",
            description: "Excellent free articles and tutorials for beginners."
        },
        {
            id: 7,
            name: "YouTube – Emmet Byrne",
            type: "learning",
            description: "Clear and practical smartphone photography tutorials."
        }
    ];

    // Get favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem("favoriteResources")) || [];

    // Function to display resources
    function displayResources(filter = "all") {
        resourcesContainer.innerHTML = "";

        const filtered = filter === "all" 
            ? resources 
            : resources.filter(resource => resource.type === filter);

        if (filtered.length === 0) {
            resourcesContainer.innerHTML = "<p>No resources found in this category.</p>";
            return;
        }

        filtered.forEach(resource => {
            const isFavorite = favorites.includes(resource.id);

            const resourceHTML = `
                <div class="resource-item" style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #ddd;">
                    <h3>${resource.name}</h3>
                    <p>${resource.description}</p>
                    <p><em>Category: ${resource.type}</em></p>
                    <button class="favorite-btn" data-id="${resource.id}">
                        ${isFavorite ? "★ Remove Favorite" : "☆ Add to Favorites"}
                    </button>
                </div>
            `;
            resourcesContainer.innerHTML += resourceHTML;
        });

        // Add event listeners to the new favorite buttons
        document.querySelectorAll(".favorite-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = Number(e.target.dataset.id);

                if (favorites.includes(id)) {
                    favorites = favorites.filter(favId => favId !== id);
                } else {
                    favorites.push(id);
                }

                localStorage.setItem("favoriteResources", JSON.stringify(favorites));
                displayResources(filter); // re-render
                displayFavorites();
            });
        });
    }

    // Function to show saved favorites
    function displayFavorites() {
        const favoritesContainer = document.getElementById("favorites-container");

        if (favorites.length === 0) {
            favoritesContainer.innerHTML = "<p>You haven't saved any favorites yet.</p>";
            return;
        }

        const favItems = resources.filter(resource => favorites.includes(resource.id));

        favoritesContainer.innerHTML = favItems.map(item => 
            `<p>★ <strong>${item.name}</strong> – ${item.description}</p>`
        ).join("");
    }

    // Filter buttons
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.dataset.filter;
            displayResources(filterValue);
        });
    });

    // Initial display
    displayResources("all");
    displayFavorites();

    // ===== Contact Form =====
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const subscribe = document.getElementById("subscribe").checked;

        // Simple validation with conditionals
        if (name === "" || email === "") {
            formMessage.textContent = "Please fill in your name and email.";
            formMessage.style.color = "red";
            return;
        }

        // Save subscription preference
        if (subscribe) {
            localStorage.setItem("newsletterSubscribed", "true");
            formMessage.textContent = `Thank you ${name}! Your message was sent and you are now subscribed.`;
        } else {
            formMessage.textContent = `Thank you ${name}! Your message was sent.`;
        }

        formMessage.style.color = "green";
        contactForm.reset();
    });
}