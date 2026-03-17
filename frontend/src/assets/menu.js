let toggleClickHandler = null;
let closeClickHandler = null;
let navLinkClickHandler = null;
let keydownHandler = null;
let documentClickHandler = null;
let lastScrollY = window.scrollY;
let scrollHandler = null;
let resizeHandler = null;

const isPortraitPhone = () => window.matchMedia("(max-width: 767px) and (orientation: portrait)").matches;

export const initHeaderScroll = () => {
  const siteHeader = document.querySelector(".site-header");
  if (!siteHeader) return;

  const refreshHeaderState = () => {
    const currentScrollY = window.scrollY;
    const portraitPhone = isPortraitPhone();

    if (currentScrollY > 50) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }

    if (portraitPhone) {
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        siteHeader.classList.add("scrolled-down");
      } else {
        siteHeader.classList.remove("scrolled-down");
      }
    } else {
      siteHeader.classList.remove("scrolled-down");
    }

    lastScrollY = currentScrollY;
  };

  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler);
  }

  if (resizeHandler) {
    window.removeEventListener("resize", resizeHandler);
  }

  scrollHandler = () => {
    refreshHeaderState();
  };

  window.addEventListener("scroll", scrollHandler, { passive: true });

  resizeHandler = () => {
    refreshHeaderState();
  };

  window.addEventListener("resize", resizeHandler, { passive: true });
  lastScrollY = window.scrollY;
  refreshHeaderState();
};

export const initHeaderMenu = () => {
  const menuShell = document.querySelector(".menu-shell");
  if (!(menuShell instanceof HTMLElement)) return;
  const siteHeader = document.querySelector(".site-header");

  const toggleBtn = menuShell.querySelector(".menu-toggle");
  const closeBtn = menuShell.querySelector(".offcanvas-close");
  const navLinks = menuShell.querySelectorAll(".offcanvas-panel a");

  const setOpen = (open) => {
    if (!(toggleBtn instanceof HTMLButtonElement)) return;
    menuShell.dataset.open = open ? "true" : "false";
    toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (siteHeader instanceof HTMLElement) {
      siteHeader.classList.toggle("menu-open", open);
      if (open) {
        siteHeader.classList.remove("scrolled-down");
      }
    }
  };

  // Remove old event listeners
  if (toggleClickHandler && toggleBtn) {
    toggleBtn.removeEventListener("click", toggleClickHandler);
  }
  if (closeClickHandler && closeBtn) {
    closeBtn.removeEventListener("click", closeClickHandler);
  }
  if (navLinkClickHandler) {
    navLinks.forEach((link) => {
      link.removeEventListener("click", navLinkClickHandler);
    });
  }
  if (keydownHandler) {
    document.removeEventListener("keydown", keydownHandler);
  }
  if (documentClickHandler) {
    document.removeEventListener("click", documentClickHandler);
  }

  // Define new event handlers
  toggleClickHandler = () => {
    const open = menuShell.dataset.open === "true";
    setOpen(!open);
  };

  closeClickHandler = () => {
    setOpen(false);
  };

  navLinkClickHandler = () => {
    setOpen(false);
  };

  keydownHandler = (event) => {
    if (event.key === "Escape") setOpen(false);
  };

  documentClickHandler = (event) => {
    if (menuShell.dataset.open !== "true") return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (!menuShell.contains(target)) setOpen(false);
  };

  // Add new event listeners
  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleClickHandler);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", closeClickHandler);
  }
  navLinks.forEach((link) => {
    link.addEventListener("click", navLinkClickHandler);
  });
  document.addEventListener("keydown", keydownHandler);
  document.addEventListener("click", documentClickHandler);
  initHeaderScroll();
};
