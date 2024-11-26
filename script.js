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





//scroll
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
