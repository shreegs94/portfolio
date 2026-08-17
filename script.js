const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");


// Open / close mobile menu
menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a navigation link
navItems.forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// Close menu when scrolling
window.addEventListener("scroll", () => {
    navLinks.classList.remove("active");
});


// Close menu when clicking outside
document.addEventListener("click", (event) => {

    if (
        !navLinks.contains(event.target) &&
        !menuIcon.contains(event.target)
    ) {
        navLinks.classList.remove("active");
    }

});


// Active navigation link
window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll("section");

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active-link");
        }

    });

});