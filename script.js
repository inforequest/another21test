document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  menuButton?.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuButton?.setAttribute("aria-expanded", "false");
    });
  });

  const form = document.getElementById("applicationForm");
  const success = document.querySelector(".form-success");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    // Static-site demo behaviour.
    // Replace this handler with your CRM / form endpoint before launch.
    success.hidden = false;
    form.querySelectorAll("input, textarea, select, button").forEach(el => {
      if (el !== success) el.disabled = true;
    });
    success.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  // Small reveal effect for cards as they enter the viewport.
  const revealItems = document.querySelectorAll(".benefit-card, .step, .stat");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => {
    item.classList.add("reveal");
    observer.observe(item);
  });
});
