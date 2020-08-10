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