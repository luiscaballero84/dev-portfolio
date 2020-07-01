/////////////////////////
// Controller imports
/////////////////////////
import { elements } from './views/selectors.js';
import * as navModel from './models/Nav.js';
import * as navView from './views/navView.js';


/////////////////////////
// Nav Controller
/////////////////////////

// Nav / Burger Menu Controller
elements.burgerIcon.addEventListener('click', navModel.burgerMenuToggle);

// Nav / Links
elements.navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setTimeout(function() { 
      navView.displayMenuToggle(); }, 620);
  })
});