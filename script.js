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
