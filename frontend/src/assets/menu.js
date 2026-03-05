let toggleClickHandler = null;
let closeClickHandler = null;
let navLinkClickHandler = null;
let keydownHandler = null;
let documentClickHandler = null;

export const initHeaderMenu = () => {
  const menuShell = document.querySelector(".menu-shell");
  if (!(menuShell instanceof HTMLElement)) return;

  const toggleBtn = menuShell.querySelector(".menu-toggle");
  const closeBtn = menuShell.querySelector(".offcanvas-close");
  const navLinks = menuShell.querySelectorAll(".offcanvas-panel a");

  const setOpen = (open) => {
    if (!(toggleBtn instanceof HTMLButtonElement)) return;
    menuShell.dataset.open = open ? "true" : "false";
    toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
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
};
