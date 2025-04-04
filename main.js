const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector("#primary-nav");

navToggle.addEventListener("click", () => {
  const navOpened = navToggle.getAttribute("aria-expanded");
  const toggleValue = navOpened === "false" ? "true" : "false";

  navToggle.setAttribute("aria-expanded", toggleValue);
});
