/***********************/
// mobile-nav
let btnMobileNav = document.getElementById("btn-mobile-nav");
const headerEl = document.getElementById("header");
console.log(btnMobileNav);
console.log(headerEl);

btnMobileNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
