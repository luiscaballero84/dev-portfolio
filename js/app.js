/////////////////////////
// Controller imports
/////////////////////////
import {elements, anchors} from './views/selectors.js';
import * as navModel from './models/Nav.js';
import * as smoothModel from './models/SmoothScroll.js';

/////////////////////////
// Nav Controller
/////////////////////////


// Nav / Burger Menu Controller
elements.burgerIcon.addEventListener('click', navModel.burgerMenuToggle);

// Smooth-Scroll Controller
// elements.projectsBtn.addEventListener('click', () => {
//   smoothModel.smoothScroll('#projects-section', 1000);
// });

// elements.aboutBtn.addEventListener('click', () => {
//   smoothModel.smoothScroll('#about-section', 1000);
// });