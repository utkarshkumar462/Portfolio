// Toggle menu for mobile view
const menuBtn = document.querySelector(".menu-btn");
const navbarMenu = document.querySelector(".navbar .menu");

if (menuBtn && navbarMenu) {
    menuBtn.addEventListener("click", () => {
        navbarMenu.classList.toggle("active");
    });
}

// Sticky Navbar
const navbar = document.querySelector(".navbar");
if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });
}

// Typing Animation (Check if element exists)
if (document.querySelector(".typing")) {
    new Typed(".typing", {
        strings: ["Web Developer", "Python Programmer", "AI Enthusiast", "Game Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
}

if (document.querySelector(".typing-2")) {
    new Typed(".typing-2", {
        strings: ["Web Developer", "Python Programmer", "AI Enthusiast", "Game Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
}

// Scroll-up button
const scrollUpBtn = document.querySelector(".scroll-up-btn");
if (scrollUpBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            scrollUpBtn.style.display = "block";
        } else {
            scrollUpBtn.style.display = "none";
        }
    });

    scrollUpBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Owl Carousel (Ensure jQuery and Owl Carousel are loaded before using)
if (window.jQuery) {
    $(document).ready(function () {
        if ($(".carousel").length) {
            $(".carousel").owlCarousel({
                margin: 20,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
                responsive: {
                    0: { items: 1, nav: false },
                    600: { items: 2, nav: false },
                    1000: { items: 3, nav: false }
                }
            });
        }
    });
} else {
    console.error("jQuery not found! Please include jQuery before using Owl Carousel.");
}

// Skill Progress Animation
const skillBars = document.querySelectorAll(".progress-line span");

function animateSkills() {
    skillBars.forEach(bar => {
        bar.style.width = bar.dataset.progress;
    });
}

// Trigger skills animation when in viewport
const skillsSection = document.querySelector(".skills");
if (skillsSection) {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            animateSkills();
        }
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
}

// Smooth Scrolling for Navbar Links
const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

// Active Link Highlight on Scroll
window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));
        if (section.offsetTop <= scrollPosition + 50 && section.offsetTop + section.offsetHeight > scrollPosition + 50) {
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        }
    });
});




$(document).ready(function () {
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("fa-times"); // Change icon (bars to cross)
    });
});
