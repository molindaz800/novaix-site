(() => {
  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav-toggle");
  const modal = document.getElementById("calendly-modal");
  const cookieBanner = document.getElementById("cookie-banner");
  const cookieKey = "novaix_sector_cookie_notice";
  let calendlyLoaded = false;

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  navToggle?.addEventListener("click", () => {
    const isOpen = nav?.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
    navToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      nav?.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  function loadCalendly() {
    if (calendlyLoaded) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    calendlyLoaded = true;
  }

  function openModal() {
    modal?.classList.add("open");
    modal?.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    loadCalendly();
  }

  function closeModal() {
    modal?.classList.remove("open");
    modal?.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-calendly-open]").forEach((button) => {
    button.addEventListener("click", openModal);
  });
  document.querySelector(".modal-close")?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  }

  if (!localStorage.getItem(cookieKey)) cookieBanner?.classList.add("is-visible");
  function dismissCookieNotice() {
    localStorage.setItem(cookieKey, "closed");
    cookieBanner?.classList.remove("is-visible");
  }
  document.getElementById("cookie-accept")?.addEventListener("click", dismissCookieNotice);
  document.getElementById("cookie-decline")?.addEventListener("click", dismissCookieNotice);
})();
