const navToggler = document.getElementById("navbar-toggler");
const mobileNav = document.querySelector(".nav-links-mobile");
const mobileNavLinks = document.querySelectorAll(".nav-link-mobile");

navToggler.addEventListener("click", () => {
  mobileNav.classList.toggle("hide");
  changeNavButton();
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.add("hide");
    changeNavButton();
  });
});

const changeNavButton = () => {
  if (mobileNav.classList.contains("hide")) {
    navToggler.className = "fa-solid fa-bars";
  } else if (!mobileNav.classList.contains("hide")) {
    navToggler.className = "fa-solid fa-xmark";
  }
};
