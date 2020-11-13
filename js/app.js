/////////////////////////
// Controller imports
/////////////////////////
import { elements } from './views/selectors.js';
import * as navModel from './models/Nav.js';
import * as navView from './views/navView.js';
import * as cardView from './views/cardView.js';


/////////////////////////
// Nav Controller
/////////////////////////

// Nav / Burger Menu Controller
elements.burgerIcon.addEventListener('click', navModel.burgerMenuToggle);

// Nav / Links
elements.navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setTimeout(function() { 
      if (elements.navMenu.classList.contains("menu-active")) {
        navView.displayMenuToggle(); 
      }
    }, 620);
  })
});

// Nav / on Scroll change color navbar
window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
    elements.nav.classList.add("nav-scroll");
  } else {
    elements.nav.classList.remove("nav-scroll");
  }
// Scroll up Arrow
  if (document.body.scrollTop >= 1100 || document.documentElement.scrollTop >= 1100) {
    elements.arrowUp.classList.add("arrow-up-active");
  } else {
    elements.arrowUp.classList.remove("arrow-up-active");
  }
};



////////////////////////
// Spy Scroll for NAV
document.addEventListener('DOMContentLoaded', function(){ 
  
  const { sections, navLinks } = elements;

  // functions to add and remove the active class from links as appropriate
  const makeActive = (link) => navLinks[link].classList.add("link-active");
  const removeActive = (link) => navLinks[link].classList.remove("link-active");
  const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
  
  const sectionMargin = 200;
  let currentActive = 0;
  // listen for scroll events
  window.addEventListener("scroll", () => {
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1

    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  });
}, false);
