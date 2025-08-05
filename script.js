document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for all internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Optional: highlight current section in nav if using nav bar
  // Optional: add back-to-top button behavior or scrollspy
});
