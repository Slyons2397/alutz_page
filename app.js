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

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;
