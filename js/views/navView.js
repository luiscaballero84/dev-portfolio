import {elements} from '../views/selectors.js';

export function displayMenuToggle() {
  elements.navMenu.classList.toggle("menu-active");
  document.body.classList.toggle("u-noScroll");
  isRotated();
  /////////// not necesary for the moment
  // if (elements.nav.classList.contains("nav-scroll")) {
  //   elements.nav.classList.toggle("lines-bg-white");
  // }
}

export function isRotated() {
  elements.burgerIcon.classList.toggle('burger-animate')
}
