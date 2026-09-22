// Smooth reveal animation when sections enter the screen

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },
  {
    threshold: 0.15
  }
);


sections.forEach((section) => {

  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

  observer.observe(section);

});


// Dynamic year in footer

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
  footerText.innerHTML = `© ${year} Zoe Labdon`;
}
