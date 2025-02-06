document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio website loaded successfully!");

  // Smooth scrolling for navigation links
  const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 50,
                  behavior: "smooth"
              });
          }
      });
  });

  // Simple form validation (if a contact form exists)
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
          const emailInput = document.querySelector("#email");
          if (emailInput.value.trim() === "") {
              event.preventDefault();
              alert("Please enter a valid email address.");
          }
      });
  }
});