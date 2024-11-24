// Open FAQ Modal
document.getElementById("faq-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("faq-modal").style.display = "flex";
});

// Close FAQ Modal
document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("faq-modal").style.display = "none";
});

// Toggle FAQ answer visibility
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
    question.addEventListener("click", function() {
        const faqItem = this.closest(".faq-item");
        const answer = this.nextElementSibling;

        // Toggle the answer visibility and active class
        if (answer.style.display === "none" || answer.style.display === "") {
            answer.style.display = "block";
            faqItem.classList.add("active");
        } else {
            answer.style.display = "none";
            faqItem.classList.remove("active");
        }
    });
});


// Open Social Media Popup
document.getElementById("contact-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("social-popup").style.display = "flex";
});

// Close Social Media Popup
document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("social-popup").style.display = "none";
});

// Optional: Close the popup when clicking outside the popup content
document.getElementById("social-popup").addEventListener("click", function(event) {
    if (event.target === document.getElementById("social-popup")) {
        document.getElementById("social-popup").style.display = "none";
    }
});

// Open "How It Works" Popup
document.getElementById("how-it-works-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("how-it-works-popup").style.display = "flex";
});

// Close "How It Works" Popup
document.getElementById("close-how-it-works-popup").addEventListener("click", function() {
    document.getElementById("how-it-works-popup").style.display = "none";
});

// Optional: Close the popup when clicking outside the popup content
document.getElementById("how-it-works-popup").addEventListener("click", function(event) {
    if (event.target === document.getElementById("how-it-works-popup")) {
        document.getElementById("how-it-works-popup").style.display = "none";
    }
});
