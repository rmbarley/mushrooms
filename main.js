const navToggle = document.querySelector('[aria-controls="primary-nav"]');
navToggle.addEventListener("click", () => {
  const navOpened = navToggle.getAttribute("aria-expanded");
  const toggleValue = navOpened === "false" ? "true" : "false";

  navToggle.setAttribute("aria-expanded", toggleValue);
});
