// Mobile navigation

const menuButton = document.getElementById("menuButton");

const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});


// Close mobile navigation after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


// Project buttons

function showProjectMessage(projectName) {

    alert(
        projectName +
        " project link will be added here."
    );

}


// Contact form

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        formMessage.textContent =
            "Thank you, " +
            name +
            "! Your message has been received.";

        contactForm.reset();

    }
);


// Automatically display current year

document.getElementById("year").textContent =
    new Date().getFullYear();
