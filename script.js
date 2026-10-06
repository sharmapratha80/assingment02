// ===============================
// MOBILE MENU
// ===============================

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

        navLinks.classList.remove("mobile-open");

    });

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll(
    "section[id]"
);

const navItems = document.querySelectorAll(
    ".nav-links a"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navItems.forEach(item => {

                    item.classList.remove("active");

                    if (
                        item.getAttribute("href") ===
                        "#" + entry.target.id
                    ) {

                        item.classList.add("active");

                    }

                });

            }

        });

    },

    {
        rootMargin: "-35% 0px -55%"
    }

);

sections.forEach(section => {
    observer.observe(section);
});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
    ".section, .contact"
);

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "visible"
                );

            }

        });

    },

    {
        threshold: 0.1
    }

);

revealElements.forEach(element => {
    revealObserver.observe(element);
});