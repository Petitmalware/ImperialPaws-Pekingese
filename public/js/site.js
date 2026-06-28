const updateHeaderState = () => {
  const header = document.querySelector(".site-header");
  if (!header) return;

  header.classList.toggle("scrolled", window.scrollY > 10);
};

window.addEventListener("scroll", updateHeaderState, { passive: true });
window.addEventListener("load", updateHeaderState);
