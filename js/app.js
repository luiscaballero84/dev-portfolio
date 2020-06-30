/////////////////////////
// Controller imports
/////////////////////////
import {elements} from './views/selectors.js';
import * as navModel from './models/Nav.js';

/////////////////////////
// Nav Controller
/////////////////////////


// Nav / Burger Menu Controller
elements.burgerIcon.addEventListener('click', navModel.burgerMenuToggle);