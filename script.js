document.addEventListener("DOMContentLoaded", function () {
    console.log("Contact Bar Loaded!");
});
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function () {
    const footerSections = document.querySelectorAll(".footer-section");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2 // Trigger animation when 20% of the element is visible
    };

    const animateFooter = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-footer");
            }
        });
    };

    const observer = new IntersectionObserver(animateFooter, observerOptions);

    footerSections.forEach(section => observer.observe(section));
});
document.addEventListener("DOMContentLoaded", function () {
    const conferenceSection = document.querySelector(".conference-section");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2 // Trigger when 30% of the section is visible
    };

    const animateSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-section");
            }
        });
    };

    const observer = new IntersectionObserver(animateSection, observerOptions);
    observer.observe(conferenceSection);
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".contact-bar").classList.add("show");
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".navbar").classList.add("show");
});
document.addEventListener("DOMContentLoaded", function () {
    const contactInfo = document.querySelector(".contact-info");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3 // Trigger when 30% is visible
    };

    const animateContact = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactInfo.classList.add("animate-contact");
            } else {
                contactInfo.classList.remove("animate-contact"); // Remove for replay on scroll
            }
        });
    };

    const observer = new IntersectionObserver(animateContact, observerOptions);
    observer.observe(contactInfo);
});

// contact
document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.querySelector(".contact-container");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2 // Triggers when 30% is visible
    };

    const animateContact = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactSection.classList.add("animate-contact");
            } else {
                contactSection.classList.remove("animate-contact"); // Remove for replay on scroll
            }
        });
    };

    const observer = new IntersectionObserver(animateContact, observerOptions);
    observer.observe(contactSection);
});
// gadbad
function revealOnScroll() {
    const elements = document.querySelectorAll("h1, p");
    elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
            el.classList.add("show");
        }
    });
}

// Event listener for scroll
window.addEventListener("scroll", revealOnScroll);

// Run once when the page loads
revealOnScroll();
// registration
document.addEventListener("DOMContentLoaded", function () {
    function revealOnScroll() {
        const elements = document.querySelectorAll(".registration-page, p, table, .second, h2, .registration-form");
        elements.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
                el.style.transition = "opacity 1s ease, transform 1s ease";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load
});
// publicTION
document.addEventListener("DOMContentLoaded", function () {
    function revealOnScroll() {
        const updateElement = document.querySelector(".update");
        if (updateElement.getBoundingClientRect().top < window.innerHeight * 0.85) {
            updateElement.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load
});

 