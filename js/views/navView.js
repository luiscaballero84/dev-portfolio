import {elements} from '../views/selectors.js';

export function displayMenu() {
  elements.navMenu.classList.toggle("nav-active");
  document.body.classList.toggle("u-noScroll");
  isRotated();
}

export function isRotated() {
  elements.burgerIcon.classList.toggle('burger-animate')
}